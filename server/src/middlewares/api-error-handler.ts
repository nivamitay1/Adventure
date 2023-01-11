import { Request, Response, NextFunction } from "express";
import { ApiError } from "../errors/ApiError";

function apiErrorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err);

  if (err instanceof ApiError) {
    return res.status(err.code).json(err.message);
  }

  res.status(500).json("Something went wrong");
}
export { apiErrorHandler };
