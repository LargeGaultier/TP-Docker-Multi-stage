import express, { Request, Response } from "express";

const app = express();
const port = 3002;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TypeScript & Docker!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});