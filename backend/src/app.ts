import express from "express";
import type { Express, Request, Response } from "express";
import { PORT, SERVER_URL } from "./config/env.ts";
import orderRoutes from "./routes/order.routes.ts";
import adminRoute from "./routes/admin.routes.ts";
import productRoute from "./routes/product.routes.ts";
import connectToDatabase from "./database/mongodb.ts";

const app: Express = express();

// routes
app.use("/api/v1/order", orderRoutes);
app.use("api/v1/login", adminRoute);
app.use("api/v1/product", productRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Building the backend for the e-commerce app...");
});

app.listen(PORT, async () => {
  console.log(`The e-commerce app is working in the PORT ${SERVER_URL}`);
  await connectToDatabase();
});

export default app;
