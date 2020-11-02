import express, { Request, Response } from "express";
import { authController } from "../controllers/index.controller";
import passport from "passport";

export const router = express.Router({
  strict: true,
});

router.post("/signin", (req: Request, res: Response): void => {
  authController.signin(req, res);
});

router.post("/signup", (req: Request, res: Response): void => {
  authController.create(req, res);
});

router.put("/update", (req: Request, res: Response): void => {
  authController.update(req, res);
});

router.post("/signout", passport.authenticate("jwt", { session: false }), (req: Request, res: Response): void => {
  authController.signout(req, res);
});
