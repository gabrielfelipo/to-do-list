import { AsyncEither } from '../logic/Either';
import { DomainError } from '../errors';
export type IUseCaseResponse<T = unknown> = {
    message: String;
} & (T extends Object ? {
    response: T;
} : unknown);
export interface IUseCase {
    execute: (payload?: unknown, auth?: unknown) => AsyncEither<DomainError, IUseCaseResponse>;
}
