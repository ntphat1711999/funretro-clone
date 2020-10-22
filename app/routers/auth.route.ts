import express, { Request, Response } from "express";
import { authController } from "../controllers/index.controller";

export const router = express.Router({
  strict: true,
});

router.get("/signin", (req: Request, res: Response): void => {
  //   res.status(200).send("GET SIGN IN");
  authController.read(req, res);
});

router.post("/signin", (req: Request, res: Response): void => {
  //   res.status(200).send("POST SIGN IN");
  authController.create(req, res);
});
