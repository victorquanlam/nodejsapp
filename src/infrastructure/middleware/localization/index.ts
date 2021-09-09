import { Request, Response, NextFunction } from "../../app/core/Modules";
import resources from "../../../application/shared/locals/messages";
import words from "../../../application/shared/locals/words";
import config from "../../config";

export class LocalizationMiddleware {
  handle(req: Request, res: Response, next: NextFunction): void {
    const language = req.headers["accept-language"] || config.Params.DefaultLang;
    resources.init(language);
    words.init(language);

    return next();
  }
}

export default new LocalizationMiddleware();
