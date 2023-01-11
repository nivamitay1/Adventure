import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    console.log({ errors: err.serializeErrors(), status: err.statusCode });

    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }
  console.log(err);

  res.status(400).send([{ message: "Something went wrong" }]);
};
