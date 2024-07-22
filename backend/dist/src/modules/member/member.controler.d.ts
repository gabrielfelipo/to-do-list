import { CreateMemberDto } from './dtos/create-member';
import { CreateMemberUseCase } from './use-cases/create-member';
export declare class MemberController {
    private createMemberUseCase;
    constructor(createMemberUseCase: CreateMemberUseCase);
    createMember(createMemberDto: CreateMemberDto): Promise<import("../../common/logic/Either").Either<import("../../common/errors").DomainError, {
        message: String;
    }>>;
}
