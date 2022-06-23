import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('New Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`NEW ⚡️[server]: Server is running at https://localhost:${port}`);
});