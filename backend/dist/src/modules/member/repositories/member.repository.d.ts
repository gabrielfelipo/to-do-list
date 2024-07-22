import { Member } from '../entities/Member';
export declare abstract class MemberRepository {
    static usedAs: string;
    abstract create(member: Member): Promise<Member>;
    abstract findById(id: string): Promise<Member | null | undefined>;
    abstract findByEmail(email: string): Promise<Member | null | undefined>;
}
