import { Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { MemberRepository } from 'src/modules/member/repositories/member.repository'
import { PrismaMemberRepository } from './repositories/prisma-member.repository'

@Module({
  providers: [
    PrismaService,
    { provide: MemberRepository, useClass: PrismaMemberRepository },
    // { provide: ScheduleRepository, useClass: PrismaScheduleRepository },
  ],
  exports: [MemberRepository],
})
export class PrismaModule {}
