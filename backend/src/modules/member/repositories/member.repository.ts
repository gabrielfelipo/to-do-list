import { Injectable } from '@nestjs/common'
import { Member } from '../entities/Member'

@Injectable()
export abstract class MemberRepository {
  static usedAs = 'memberRepository'

  abstract create(member: Member): Promise<Member>

  abstract findById(id: string): Promise<Member | null | undefined>

  abstract findByEmail(email: string): Promise<Member | null | undefined>
}
