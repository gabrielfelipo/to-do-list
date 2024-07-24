import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/common/prisma/prisma.module'
import { MemberController } from './member.controler'
import { CreateMemberUseCase } from './use-cases/create-member'
import { GetMemberUseCase } from './use-cases/get-member'

@Module({
  imports: [PrismaModule],
  controllers: [MemberController],
  providers: [CreateMemberUseCase, GetMemberUseCase],
})
export class MemberModule {}
