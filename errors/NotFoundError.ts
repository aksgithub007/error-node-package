import { CustomError } from "./CustomError";

export class NOtFoundError extends CustomError {
  statusCode: number = 404;
  constructor(message: string = "Route is not defined here") {
    super(message);

    Object.setPrototypeOf(this, NOtFoundError.prototype);
  }

  displayError() {
    return [{ message: this.message }];
  }
}
