import { Router } from "express";

const productRoute: Router = Router();

// adding any product
productRoute.post("/add");
// removing a product
productRoute.post("/remove");
// getting a singe product
productRoute.post("/single");
// getting all the products
productRoute.get("/list");

export default productRoute;
