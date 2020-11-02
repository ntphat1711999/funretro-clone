import { Request, Response } from "express";
import { CrudController } from "./crud.controller";
import db from "../database/db";

export class BoardController extends CrudController {
  public create(req: Request, res: Response): void {
    try {
      const { user, name, date, permission } = req.body;
      const text = `INSERT INTO board (name, date, permission, owner)
                    VALUES ($1, $2, $3, $4)`;
      const values = [name, date, permission, user.email];
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
      const { owner } = req.body;
      const text = `SELECT * FROM board
                    WHERE owner = $1`;
      const values = [owner];
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
      const { name, id } = req.body;
      const text = `UPDATE board
                    SET name = $1
                    WHERE id = $2`;
      const values = [name, id];
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
      const { id } = req.body;
      const text = `DELETE FROM board
                    WHERE id = $1`;
      const values = [id];
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
      const { id } = req.body;
      const text = `UPDATE board
                    SET permission = 'public'
                    WHERE id = $1`;
      const values = [id];
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
      const { id } = req.body;
      const text = `UPDATE board
                    SET permission = 'private'
                    WHERE id = $1`;
      const values = [id];
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
