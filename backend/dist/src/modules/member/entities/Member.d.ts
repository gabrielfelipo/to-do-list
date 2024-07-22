import { Entity } from 'src/common/entities/entity';
type MemberProps = {
    name: string;
    email: string;
    password: string;
};
export declare class Member extends Entity<MemberProps> {
    props: MemberProps;
    get name(): string;
    get email(): string;
    get password(): string;
    get _serialized(): {
        id: string;
        name: string;
        email: string;
        password: string;
    };
    static create(props: MemberProps, id?: string): Member;
}
export {};
