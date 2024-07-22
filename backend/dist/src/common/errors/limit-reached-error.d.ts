import { DomainError, ErrorCodes } from '.';
export declare class LimitReachedError implements DomainError {
    error: string;
    code: ErrorCodes;
    response: unknown;
    constructor(message: string);
}
