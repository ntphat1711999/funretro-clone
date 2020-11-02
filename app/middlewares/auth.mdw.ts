import jwt from "jsonwebtoken";
import db from "../database/db";

export const auth = async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  const { email } = jwt.verify(token, process.env.JWT_SECRET);
  try {
    const text = `SELECT * FROM account
                  WHERE email = $1`;
    const values = [email];
    db.query(text, values, (err, result) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      req.user = result.rows[0];
      req.token = token;
      next();
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
