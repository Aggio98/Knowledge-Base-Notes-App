//Express app setup
import express from "express";
import type { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = Number(process.env.PORT)


app.use(express.json());

app.get("/", (req: Request, res: Response)=>{
    res.send("Hello World");
})

app.listen(port, () =>{
    console.log(`Server is connected to https://localhost:${port}`);
})

export default app;
