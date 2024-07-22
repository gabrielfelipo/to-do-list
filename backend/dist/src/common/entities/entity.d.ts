export declare abstract class Entity<T> {
    protected readonly _id: string;
    readonly props: T;
    get id(): string;
    constructor(props: T, id?: string);
    equals(object?: Entity<T>): boolean;
}
