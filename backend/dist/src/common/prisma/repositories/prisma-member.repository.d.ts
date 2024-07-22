import { PrismaService } from '../prisma.service';
import { Member } from 'src/modules/member/entities/Member';
import { MemberRepository } from 'src/modules/member/repositories/member.repository';
export declare class PrismaMemberRepository extends MemberRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(member: Member): Promise<Member>;
    findById(id: string): Promise<Member | null | undefined>;
    findByEmail(email: string): Promise<Member | null | undefined>;
}
