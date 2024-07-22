import { Body, Controller, Post } from '@nestjs/common'

import { CreateMemberDto, createMemberSchema } from './dtos/create-member'
import { ZodValidationPipe } from 'src/utils/validation-pipe'
import { CreateMemberUseCase } from './use-cases/create-member'

@Controller('members')
export class MemberController {
  constructor(private createMemberUseCase: CreateMemberUseCase) {}

  @Post()
  async createMember(
    @Body(new ZodValidationPipe(createMemberSchema))
    createMemberDto: CreateMemberDto
  ) {
    return await this.createMemberUseCase.execute(createMemberDto)
  }
}
