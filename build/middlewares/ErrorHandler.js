"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const CustomError_1 = require("../errors/CustomError");
const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomError_1.CustomError) {
        return res
            .status(err.statusCode)
            .send({ status: false, error: err.displayError() });
    }
    return res
        .status(500)
        .send({ status: false, error: [{ message: "Internal Server Error" }] });
};
exports.errorHandler = errorHandler;
