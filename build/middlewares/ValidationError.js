import { validationResult } from "express-validator";
import { FieldValidationError } from "../errors/FieldValidationError";
export const ValidationError = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new FieldValidationError(errors.array());
    }
    next();
};
