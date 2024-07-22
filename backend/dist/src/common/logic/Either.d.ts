export declare class Left<L, A> {
    readonly value: L;
    constructor(value: L);
    isLeft(): this is Left<L, A>;
    isRight(): this is Right<L, A>;
}
export declare class Right<L, A> {
    readonly value: A;
    constructor(value: A);
    isLeft(): this is Left<L, A>;
    isRight(): this is Right<L, A>;
}
export type Either<L, A> = Left<L, A> | Right<L, A>;
export type AsyncEither<L, A> = Promise<Either<L, A>>;
export declare const left: <L, A>(l: L) => Either<L, A>;
export declare const right: <L, A>(a: A) => Either<L, A>;
