import { CustomError } from "./CustomError";
export class CommonError extends CustomError {
    statusCode = 400;
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, CommonError.prototype);
    }
    displayError() {
        return [{ message: this.message }];
    }
}
