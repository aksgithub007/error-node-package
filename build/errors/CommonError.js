"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonError = void 0;
const CustomError_1 = require("./CustomError");
class CommonError extends CustomError_1.CustomError {
    statusCode = 400;
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, CommonError.prototype);
    }
    displayError() {
        return [{ message: this.message }];
    }
}
exports.CommonError = CommonError;
