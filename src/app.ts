import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRouters } from "./app/modules/product/product.route";
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.use("/api/products", ProductRouters);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

export default app;
