import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { FieldValidationError } from "../errors/FieldValidationError";

export const ValidationError = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new FieldValidationError(errors.array());
  }
  next();
};
