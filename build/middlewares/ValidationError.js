"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
const express_validator_1 = require("express-validator");
const FieldValidationError_1 = require("../errors/FieldValidationError");
const ValidationError = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        throw new FieldValidationError_1.FieldValidationError(errors.array());
    }
    next();
};
exports.ValidationError = ValidationError;
