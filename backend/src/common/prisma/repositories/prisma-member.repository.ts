
import { PrismaService } from '../prisma.service'
import { Injectable } from '@nestjs/common'
import { Member } from 'src/modules/member/entities/Member'
import { MemberRepository } from 'src/modules/member/repositories/member.repository'
import { MemberMapper } from '../mappers/member.mapper'

@Injectable()
export class PrismaMemberRepository extends MemberRepository {
  constructor(private readonly prisma: PrismaService) {
    super()
  }

  async create(member: Member): Promise<Member> {
    await this.prisma.member.create({
      data: MemberMapper.toPersistence(member),
    })

    return member
  }

  async findById(id: string): Promise<Member | null | undefined> {
    const member = await this.prisma.member.findUnique({
      where: { id },
    })

    if (!member) return null

    return MemberMapper.toDomain(member)
  }

  async findByEmail(email: string): Promise<Member | null | undefined> {
    const member = await this.prisma.member.findUnique({
      where: { email },
    })

    if (!member) return null

    return MemberMapper.toDomain(member)
  }
}
