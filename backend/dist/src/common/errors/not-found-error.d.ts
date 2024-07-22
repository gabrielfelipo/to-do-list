import { DomainError, ErrorCodes } from '.';
export declare class NoneElementError implements DomainError {
    error: string;
    code: ErrorCodes;
    response: unknown;
    constructor(message: string);
}
