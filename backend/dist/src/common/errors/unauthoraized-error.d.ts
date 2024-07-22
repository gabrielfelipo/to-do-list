import { DomainError, ErrorCodes } from '.';
export declare class UnauthorizedError implements DomainError {
    error: string;
    code: ErrorCodes;
    response: unknown;
    constructor(message?: string);
}
