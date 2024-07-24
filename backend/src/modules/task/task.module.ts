import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/common/prisma/prisma.module'
import { TaskController } from './task.controller'
import { RegisterTaskUseCase } from './use-cases/register-task'
import { UpdateTaskUseCase } from './use-cases/update-task'
import { DeleteTaskUseCase } from './use-cases/delete-task'
import { FinalizeTaskUseCase } from './use-cases/finalize-task'
import { GetTaskUseCase } from './use-cases/get-task'
import { MemberTasksUseCase } from './use-cases/member-tasks'
import { AllTasksUseCase } from './use-cases/all-tasks'

@Module({
  imports: [PrismaModule],
  controllers: [TaskController],
  providers: [
    RegisterTaskUseCase,
    UpdateTaskUseCase,
    DeleteTaskUseCase,
    FinalizeTaskUseCase,
    GetTaskUseCase,
    MemberTasksUseCase,
    AllTasksUseCase,
  ],
})
export class TaskModule {}
