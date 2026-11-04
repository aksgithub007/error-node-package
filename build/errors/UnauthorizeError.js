"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizeError = void 0;
const CustomError_1 = require("./CustomError");
class UnauthorizeError extends CustomError_1.CustomError {
    statusCode = 401;
    constructor(message = "Unauthorized User") {
        super(message);
        Object.setPrototypeOf(this, UnauthorizeError.prototype);
    }
    displayError() {
        return [{ message: this.message }];
    }
}
exports.UnauthorizeError = UnauthorizeError;
