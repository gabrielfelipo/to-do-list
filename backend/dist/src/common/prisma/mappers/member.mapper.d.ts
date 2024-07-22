import { Prisma } from '@prisma/client';
import { Member } from 'src/modules/member/entities/Member';
import { SetOptional } from 'type-fest';
export declare class MemberMapper {
    static toDomain(raw_: SetOptional<Prisma.MemberGetPayload<{
        include: {
            tasks: true;
        };
    }>, 'tasks'>): Member;
    static toPersistence(member: Member): Prisma.MemberCreateInput;
}
