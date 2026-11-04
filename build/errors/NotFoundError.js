import { CustomError } from "./CustomError";
export class NOtFoundError extends CustomError {
    statusCode = 404;
    constructor(message = "Route is not defined here") {
        super(message);
        Object.setPrototypeOf(this, NOtFoundError.prototype);
    }
    displayError() {
        return [{ message: this.message }];
    }
}
