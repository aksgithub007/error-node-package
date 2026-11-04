import { CustomError } from "./CustomError";
export class FieldValidationError extends CustomError {
    errors;
    statusCode = 400;
    constructor(errors) {
        super("Invalid Value");
        this.errors = errors;
        Object.setPrototypeOf(this, FieldValidationError.prototype);
    }
    displayError() {
        return this.errors.map((err) => ({
            message: err?.msg,
            field: err?.type === "field" ? err.path : "",
        }));
    }
}
