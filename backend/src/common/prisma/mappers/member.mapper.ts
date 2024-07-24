import { Prisma, Member as MemberRaw } from '@prisma/client'
import { Member } from 'src/modules/member/entities/Member'
import { nullsToUndefined } from 'src/utils/nulls-to-undefined'
import { SetOptional } from 'type-fest'

export class MemberMapper {
  static toDomain(
    raw_: SetOptional<
      Prisma.MemberGetPayload<{ include: { tasks: true } }>,
      'tasks'
    >
  ): Member {
    const raw = nullsToUndefined(raw_)

    return Member.create(
      {
        name: raw.name,
        email: raw.email,
        password: raw.password,
      },
      raw.id
    )
  }

  static toPersistence(member: Member): Prisma.MemberCreateInput {
    return {
      id: member.id,
      name: member.name,
      email: member.email,
      password: member.password,
    }
  }
}
