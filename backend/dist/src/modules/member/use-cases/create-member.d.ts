import { CreateMemberDto } from '../dtos/create-member';
import { DomainError } from 'src/common/errors';
import { AsyncEither } from 'src/common/logic/Either';
import { IUseCase, IUseCaseResponse } from 'src/common/types/use-case';
import { MemberRepository } from '../repositories/member.repository';
type CreateMemberResponse = AsyncEither<DomainError, IUseCaseResponse>;
export declare class CreateMemberUseCase implements IUseCase {
    private memberRepository;
    constructor(memberRepository: MemberRepository);
    execute(payload: CreateMemberDto): CreateMemberResponse;
}
export {};
