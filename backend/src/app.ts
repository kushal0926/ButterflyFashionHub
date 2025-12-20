import express from "express";
import type { Express, Request, Response } from "express";

const PORT = 3000;
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Building the backend for the e-commerce app...");
});

app.listen(PORT, () => {
    console.log(`The e-commerce app is working in the PORT${PORT}`)
});


export default app;