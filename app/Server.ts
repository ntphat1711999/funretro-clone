import { Express, Request, Response } from "express";
import express from "express";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { authRoute, boardRoute } from "./routers/index.route";

export class Server {
  private app: Express;

  constructor(app: Express) {
    this.app = app;

    const pathProduction = path.resolve("../") + "/frontend/build";
    const pathDev = path.resolve("./") + "/build/frontend";
    dotenv.config();
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    this.app.use(express.static(process.env.NODE_ENV === "production" ? pathProduction : pathDev));

    this.app.get("/api", (req: Request, res: Response): void => {
      res.send("You have reached the API!");
    });
    this.app.use("/api/auth", authRoute);
    this.app.use("/api/boards", boardRoute);

    this.app.get("*", (req: Request, res: Response): void => {
      res.sendFile("../frontend/build/index.html");
    });
  }

  public start(port: number): void {
    this.app.listen(process.env.PORT || port, () => console.log(`Server listening on: http://localhost:${port}`));
  }
}
