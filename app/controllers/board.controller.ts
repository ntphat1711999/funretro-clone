import { Request, Response } from "express";
import { CrudController } from "./crud.controller";
import db from "../database/db";

export class BoardController extends CrudController {
  public create(req: Request, res: Response): void {
    try {
      const { board_id, name, date, permission, owner } = req.body;
      const text = `INSERT INTO board (board_id, name, date, permission, owner)
                    VALUES ($1, $2, $3, $4, $5)`;
      const values = [board_id, name, date, permission, owner];
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
      return;
    }
  }
  public update(req: Request, res: Response): void {
    try {
      const { name, board_id } = req.body;
      const text = `UPDATE board
                    SET name = $1
                    WHERE board_id = $2`;
      const values = [name, board_id];
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
      const { board_id } = req.query;
      const text = `DELETE FROM board
                    WHERE board_id = $1`;
      const values = [board_id];
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
  public share(req: Request, res: Response): void {
    try {
      const { board_id } = req.body;
      const text = `UPDATE board
                    SET permission = 'public'
                    WHERE board_id = $1`;
      const values = [board_id];
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
  public unshare(req: Request, res: Response): void {
    try {
      const { board_id } = req.body;
      const text = `UPDATE board
                    SET permission = 'private'
                    WHERE board_id = $1`;
      const values = [board_id];
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
