import express, { type Express, type Request, type Response } from "express";
import { prisma } from "./db/client.ts";

const app: Express = express();

app.get("/", async (req: Request, res: Response) => {
  const user = await prisma.user.create({
    data: {
      email: "elsa@prisma.io",
      name: "Elsa Prisma",
    },
  });
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("listening at port:3000");
});
