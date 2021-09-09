import resources, { resourceKeys, Resources } from "../locals/messages/index";
export { IResult, Result, IResultT, ResultT } from "result-tsk";
import { ApplicationError } from "../errors/ApplicationError";
import applicationStatus from "../status/applicationStatus";
import words, { wordKeys } from "../locals/words/index";
import { Validator } from "validator-tsk";
import mapper, { IMap } from "mapper-tsk";
import { IResult } from "result-tsk";

export abstract class BaseUseCase<T> {
  constructor() {
    this.mapper = mapper;
    this.resources = resources;
    this.words = words;
    this.validator = new Validator(
      resources,
      resourceKeys.SOME_PARAMETERS_ARE_MISSING,
      applicationStatus.INVALID_INPUT,
    );
  }

  mapper: IMap;
  validator: Validator;
  resources: Resources;
  words: Resources;
  resourceKeys = resourceKeys;
  wordKeys = wordKeys;
  applicationStatus = applicationStatus;

  handleResultError(result: IResult): void {
    if (result?.error) {
      throw new ApplicationError(result.error, result.statusCode);
    }
  }

  abstract execute(params?: T): Promise<IResult>;
}
