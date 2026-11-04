import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/CustomError";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof CustomError) {
    return res
      .status(err.statusCode)
      .send({ status: false, error: err.displayError() });
  }

  return res
    .status(500)
    .send({ status: false, error: [{ message: "Internal Server Error" }] });
};
