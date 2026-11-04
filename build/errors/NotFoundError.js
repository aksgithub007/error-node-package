"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NOtFoundError = void 0;
const CustomError_1 = require("./CustomError");
class NOtFoundError extends CustomError_1.CustomError {
    statusCode = 404;
    constructor(message = "Route is not defined here") {
        super(message);
        Object.setPrototypeOf(this, NOtFoundError.prototype);
    }
    displayError() {
        return [{ message: this.message }];
    }
}
exports.NOtFoundError = NOtFoundError;
