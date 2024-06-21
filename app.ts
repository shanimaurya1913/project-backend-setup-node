import express, { Request, Response } from "express";
import dot from "dotenv";
dot.config();

const app = express();
const port = process.env.PORT || 3000;
// const abc = "shani";
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Cricket Score Board Server!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
