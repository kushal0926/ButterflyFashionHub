
import  {  Router } from "express";

const orderRoutes: Router = Router();

// cod or just placing order
orderRoutes.post("/",);
//
// admin features
// 
orderRoutes.get("/lists"); // getting all the order lists
orderRoutes.post("/status"); // updating any order list 
// deleting orders
orderRoutes.delete("/:id") // deleting any orders

export default orderRoutes;