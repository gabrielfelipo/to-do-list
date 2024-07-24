import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'

import { MemberModule } from './modules/member/member.module'
import { TaskModule } from './modules/task/task.module'
import { AuthModule } from './modules/auth/auth.module'
import { PrismaModule } from './common/prisma/prisma.module'
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard'
import { APP_GUARD } from '@nestjs/core'

@Module({
  imports: [PrismaModule, MemberModule, AuthModule, TaskModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
