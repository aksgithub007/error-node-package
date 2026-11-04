export class CustomError extends Error {
    message;
    constructor(message) {
        super(message);
        this.message = message;
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}
