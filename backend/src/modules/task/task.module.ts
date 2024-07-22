import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/common/prisma/prisma.module';
import { TaskController } from './task.controler';
import { RegisterTaskUseCase } from './use-cases/register-task';


@Module({
  imports: [PrismaModule],
  controllers: [TaskController],
  providers: [RegisterTaskUseCase], 
})
export class TaskModule {}
