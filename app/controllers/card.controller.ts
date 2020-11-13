import { Request, Response } from "express";
import { CrudController } from "./crud.controller";
import db from "../database/db";

export class CardController extends CrudController {
  public create(req: Request, res: Response): void {
    try {
      const { board_id, card_id, content, category, owner } = req.body;
      const text = `INSERT INTO card (board_id, card_id, content, category, owner)
                    VALUES ($1, $2, $3, $4, $5)`;
      const values = [board_id, card_id, content, category, owner];
      db.query(text, values, (err, result) => {
        if (err) {
          res.status(500).send(err);
          return;
        }
        res.status(200).json(result.rows);
      });
    } catch (err) {
      res.status(500).send(err);
      return;
    }
  }
  public read(req: Request, res: Response): void {
    try {
      const text = `SELECT * FROM card`;
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
      return;
    }
  }
  public update(req: Request, res: Response): void {
    try {
      const { content, category, card_id } = req.body;
      const text = `UPDATE card
                    SET content = $1,
                        category = $2
                    WHERE card_id = $3`;
      const values = [content, category, card_id];
      db.query(text, values, (err, result) => {
        if (err) {
          res.status(500).send(err);
          return;
        }
        res.status(200).json(result.rows);
      });
    } catch (err) {
      res.status(500).send(err);
      return;
    }
  }
  public delete(req: Request, res: Response): void {
    try {
      const { card_id } = req.body;
      const text = `DELETE FROM card
                    WHERE card_id = $1`;
      const values = [card_id];
      db.query(text, values, (err, result) => {
        if (err) {
          res.status(500).send(err);
          return;
        }
        res.status(200).json(result.rows);
      });
    } catch (err) {
      res.status(500).send(err);
      return;
    }
  }
}
