import { Request, Response } from "express";
import { CrudController } from "./crud.controller";
import db from "../database/db";

export class BoardController extends CrudController {
  public create(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }
  public read(req: Request, res: Response): void {
    try {
      const text = `SELECT * FROM board`;
      const values = [];
      db.query(text, values, (err, result) => {
        if (err) {
          res.status(500).send(err);
          return;
        }
        res.status(200).json(result.rows);
      });
    } catch (err) {
      res.status(500).send(err);
      throw new Error(err);
    }
  }
  public update(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }
  public delete(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }
}
