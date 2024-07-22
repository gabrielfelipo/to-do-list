import { Module } from '@nestjs/common';
import { MemberModule } from './modules/member/member.module';
import { TaskModule } from './modules/task/task.module';

@Module({
  imports: [MemberModule, TaskModule]
})
export class AppModule {}
