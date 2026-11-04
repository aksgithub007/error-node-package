import { CustomError } from "./CustomError";
export declare class NOtFoundError extends CustomError {
    statusCode: number;
    constructor(message?: string);
    displayError(): {
        message: string;
    }[];
}
