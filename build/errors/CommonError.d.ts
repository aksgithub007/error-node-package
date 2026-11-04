import { CustomError } from "./CustomError";
export declare class CommonError extends CustomError {
    statusCode: number;
    constructor(message: string);
    displayError(): {
        message: string;
    }[];
}
