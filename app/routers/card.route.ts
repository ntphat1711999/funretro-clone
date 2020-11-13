import express, { Request, Response } from "express";
import { cardController } from "../controllers/index.controller";

export const router = express.Router({
  strict: true,
});

router.get("/", (req: Request, res: Response): void => {
  cardController.read(req, res);
});

router.post("/create", (req: Request, res: Response): void => {
  cardController.create(req, res);
});

router.put("/update", (req: Request, res: Response): void => {
  cardController.update(req, res);
});

router.delete("/delete", (req: Request, res: Response): void => {
  cardController.delete(req, res);
});
