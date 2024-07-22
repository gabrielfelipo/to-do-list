import { Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { MemberRepository } from 'src/modules/member/repositories/member.repository'
import { PrismaMemberRepository } from './repositories/prisma-member.repository'
import { TaskRepository } from 'src/modules/task/repositories/task.repository'
import { PrismaTaskRepository } from './repositories/prisma-task.repository'

@Module({
  providers: [
    PrismaService,
    { provide: MemberRepository, useClass: PrismaMemberRepository },
    { provide: TaskRepository, useClass: PrismaTaskRepository },
  ],
  exports: [MemberRepository, TaskRepository],
})
export class PrismaModule {}
