import { ValidationError } from "express-validator";
import { CustomError } from "./CustomError";
export declare class FieldValidationError extends CustomError {
    errors: ValidationError[];
    statusCode: number;
    constructor(errors: ValidationError[]);
    displayError(): {
        message: any;
        field: string;
    }[];
}
