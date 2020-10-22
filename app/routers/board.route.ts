import express, { Request, Response } from "express";

export const router = express.Router({
  strict: true,
});

router.get("/create", (req: Request, res: Response): void => {
  res.status(200).send("GET CREATE BOARD");
});

router.post("/create", (req: Request, res: Response): void => {
  res.status(200).send("POST CREATE BOARD");
});
