"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldValidationError = void 0;
const CustomError_1 = require("./CustomError");
class FieldValidationError extends CustomError_1.CustomError {
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
exports.FieldValidationError = FieldValidationError;
