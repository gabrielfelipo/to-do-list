import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/common/prisma/prisma.module';
import { TaskController } from './task.controler';
import { RegisterTaskUseCase } from './use-cases/register-task';
import { UpdateTaskUseCase } from './use-cases/update-task';


@Module({
  imports: [PrismaModule],
  controllers: [TaskController],
  providers: [RegisterTaskUseCase, UpdateTaskUseCase], 
})
export class TaskModule {}
