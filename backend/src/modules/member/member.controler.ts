import { Body, Controller, Get, Post } from '@nestjs/common'

import { CreateMemberDto, createMemberSchema } from './dtos/create-member'
import { ZodValidationPipe } from 'src/utils/validation-pipe'
import { CreateMemberUseCase } from './use-cases/create-member'
import { Member } from './entities/Member'
import { unknown } from 'zod'
import { GetMemberUseCase } from './use-cases/get-member'
import { CurrentUser } from '../auth/decorators/current-user.decorator'
import { IsPublic } from '../auth/decorators/is-public.decorator'

@Controller('members')
export class MemberController {
  constructor(
    private createMemberUseCase: CreateMemberUseCase,
    private getMemberUseCase: GetMemberUseCase
  ) {}

  @IsPublic()
  @Post()
  async createMember(
    @Body(new ZodValidationPipe(createMemberSchema))
    createMemberDto: CreateMemberDto
  ) {
    return await this.createMemberUseCase.execute(createMemberDto)
  }

  @Get('/user')
  async getMember(@CurrentUser() currentUser: Member) {
    return await this.getMemberUseCase.execute(undefined, currentUser.id)
  }
}
