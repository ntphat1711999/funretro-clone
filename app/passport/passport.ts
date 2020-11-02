import { ExtractJwt, Strategy } from "passport-jwt";
import db from "../database/db";

export const applyPassportStrategy = (passport) => {
  const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
  };

  passport.use(
    new Strategy(jwtOptions, function (jwt_payload, next) {
      console.log("payload received", jwt_payload);
      try {
        const text = `SELECT * FROM account
                      WHERE id = $1`;
        const values = [jwt_payload.user.id];
        db.query(text, values, (err, result) => {
          if (err) {
            next(null, false);
          }
          next(null, result.rows[0]);
        });
      } catch (err) {
        next(null, false);
      }
    })
  );
};
