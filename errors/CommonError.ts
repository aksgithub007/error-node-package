import { CustomError } from "./CustomError";

export class CommonError extends CustomError {
  statusCode: number = 400;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CommonError.prototype);
  }

  displayError() {
    return [{ message: this.message }];
  }
}
