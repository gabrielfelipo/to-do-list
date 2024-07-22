import { Module } from '@nestjs/common';
import { MemberModule } from './modules/member/member.module';

@Module({
  imports: [MemberModule]
})
export class AppModule {}
