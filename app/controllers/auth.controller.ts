import { Request, Response } from "express";
import { CrudController } from "./crud.controller";
import db from "../database/db";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export class AuthController extends CrudController {
  public create(req: Request, res: Response): void {
    try {
      const { email, password, name } = req.body;
      if (!email || !password || !name) res.status(500).send("Please fill all fields !!!");
      bcrypt.hash(password, 10).then((hashedPassword) => {
        const text = `INSERT INTO account (email, password, name)
                      VALUES ($1, $2, $3)`;
        const values = [email.trim(), hashedPassword.trim(), name.trim()];
        db.query(text, values, (err, result) => {
          if (err) {
            res.status(500).send(err);
            return;
          }
          res.status(200).json(result.rows);
          return;
        });
      });
    } catch (err) {
      res.status(500).send(err);
      return;
    }
  }

  public read(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }

  public update(req: Request, res: Response): void {
    try {
      const { id, newName } = req.body;
      const text = `UPDATE account
                    SET name = $1
                    WHERE id = $2`;
      const values = [newName, id];
      db.query(text, values, (err, result) => {
        if (err) {
          res.status(500).send(err);
          return;
        }
        res.status(200).json(result.rows);
      });
    } catch (err) {
      res.status(500).send(err);
    }
  }

  public delete(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }

  public signin(req: Request, res: Response): void {
    try {
      const { email, password } = req.body;
      if (!email || !password) res.status(500).send("Please fill all fields !!!");
      const text = `SELECT * FROM account
                    WHERE email = $1`;
      const values = [email];
      db.query(text, values, (err, result) => {
        if (err) {
          res.status(500).send(err);
          return;
        }
        if (!result.rows.length) {
          res.status(500).send("Email or password is wrong !!!");
          return;
        }
        bcrypt.compare(password, result.rows[0].password).then((doMatch) => {
          if (doMatch) {
            const user = result.rows[0];
            delete user.password;
            const token = jwt.sign({ user }, process.env.JWT_SECRET);
            res.status(200).json({ user, token });
          } else {
            res.status(500).send("Email or password is wrong !!!");
            return;
          }
        });
      });
    } catch (err) {
      res.status(500).send(err);
      return;
    }
  }

  public changePassword(req: Request, res: Response): void {
    try {
      const { id, newPassword } = req.body;
      bcrypt.hash(newPassword, 10).then((hashedPassword) => {
        const text = `UPDATE account
                      SET password = $1
                      WHERE id = $2`;
        const values = [hashedPassword, id];
        db.query(text, values, (err, result) => {
          if (err) {
            res.status(500).send(err);
            return;
          }
          res.status(200).json(result.rows);
        });
      });
    } catch (err) {
      res.status(500).send(err);
    }
  }
  public signout(req: Request, res: Response): void {
    res.json({ messages: "SIGN OUT" });
    return;
  }
}
