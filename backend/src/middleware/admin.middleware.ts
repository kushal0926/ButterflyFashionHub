import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";
import Admin from "../models/admin.model.ts";
import { JWT_SECRET } from "../config/env.ts";

type CustomError = Error & {
  statusCode?: number;
  code?: number;
  errors?: Record<string, { message: string }>;
  name?: string;
};

type AdminJwtPayload = JwtPayload & {
  adminId: string;
};

const adminAuth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let token;

       if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
        };

     if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    };
    const decoded = jwt.verify(token, JWT_SECRET) as AdminJwtPayload;

    const admin = await Admin.findById(decoded.adminId);

    if (!admin) return res.status(401).json({ message: "Unauthorized" });

    req.admin = admin;

    next();
  } catch (error) {
    const err = error as CustomError;
    res.status(400).json({ message: "Unauthorized", error: err.message });
  }
};

export default adminAuth;