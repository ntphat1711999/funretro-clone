import { Express, Request, Response } from "express";
import express from "express";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import passport from "passport";
import { applyPassportStrategy } from "./passport/passport";
import { authRoute, boardRoute, cardRoute } from "./routers/index.route";

export class Server {
  private app: Express;

  constructor(app: Express) {
    this.app = app;

    dotenv.config();
    const pathProduction = path.resolve("./") + "/frontend/build";
    const pathDev = path.resolve("./") + "/build/frontend";

    applyPassportStrategy(passport);
    // use the strategy
    this.app.use(cors());

    this.app.use(passport.initialize());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    this.app.use(express.static(process.env.NODE_ENV === "production" ? pathProduction : pathDev));

    this.app.get("/api", (req: Request, res: Response): void => {
      res.send("You have reached the API!");
    });
    this.app.use("/api/auth", authRoute);
    this.app.use("/api/boards", passport.authenticate("jwt", { session: false }), boardRoute);
    this.app.use("/api/cards", passport.authenticate("jwt", { session: false }), cardRoute);

    this.app.get("*", (req: Request, res: Response): void => {
      res.sendFile(path.resolve("./") + "/frontend/build/index.html");
    });
  }

  public start(port: number): void {
    this.app.listen(process.env.PORT || port, () => console.log(`Server listening on: http://localhost:${port}`));
  }
}
