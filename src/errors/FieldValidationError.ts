import { ValidationError } from "express-validator";
import { CustomError } from "./CustomError";

export class FieldValidationError extends CustomError {
  statusCode: number = 400;
  constructor(public errors: ValidationError[]) {
    super("Invalid Value");

    Object.setPrototypeOf(this, FieldValidationError.prototype);
  }

  displayError() {
    return this.errors.map((err) => ({
      message: err?.msg,
      field: err?.type === "field" ? err.path : "",
    }));
  }
}
