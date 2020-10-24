import express, { Request, Response } from "express";
import { boardController } from "..//controllers/index.controller";

export const router = express.Router({
  strict: true,
});

router.get("/", (req: Request, res: Response): void => {
  boardController.read(req, res);
});

router.post("/create", (req: Request, res: Response): void => {
  boardController.create(req, res);
});

router.put("/edit", (req: Request, res: Response): void => {
  boardController.update(req, res);
});

router.delete("/delete", (req: Request, res: Response): void => {
  boardController.delete(req, res);
});
