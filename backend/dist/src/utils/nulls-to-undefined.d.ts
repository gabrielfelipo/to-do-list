export declare function nullsToUndefined<T>(obj: T): ReplaceNullWithUndefined<T>;
type ReplaceNullWithUndefined<T> = {
    [P in keyof T]: T[P] extends NonNullable<T[P]> ? T[P] : T[P] extends infer U | null ? U | undefined : T[P];
};
export {};
