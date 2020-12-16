import { Application, Response, Request, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "../api";
import config from "../config";
interface ExpressApp {
  app: Application;
}
export default ({ app }: ExpressApp) => {
  app.enable("trust proxy");
  app.use(cors());
  app.use(bodyParser.json());

  app.get("/status", (req: Request, res: Response) => {
    res.status(200).end();
  });

  app.use(config.api.prefix, routes());

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500);
    if (err) next(err);
  });
};
