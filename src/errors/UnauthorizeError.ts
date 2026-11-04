import { CustomError } from "./CustomError";

export class UnauthorizeError extends CustomError {
  statusCode = 401;

  constructor(message: string = "Unauthorized User") {
    super(message);

    Object.setPrototypeOf(this, UnauthorizeError.prototype);
  }

  displayError() {
    return [{ message: this.message }];
  }
}
