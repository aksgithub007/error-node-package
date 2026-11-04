import { CustomError } from "./CustomError";
export declare class UnauthorizeError extends CustomError {
    statusCode: number;
    constructor(message?: string);
    displayError(): {
        message: string;
    }[];
}
