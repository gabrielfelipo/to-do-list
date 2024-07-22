"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberController = void 0;
const common_1 = require("@nestjs/common");
const create_member_1 = require("./dtos/create-member");
const validation_pipe_1 = require("../../utils/validation-pipe");
const create_member_2 = require("./use-cases/create-member");
let MemberController = class MemberController {
    constructor(createMemberUseCase) {
        this.createMemberUseCase = createMemberUseCase;
    }
    async createMember(createMemberDto) {
        return await this.createMemberUseCase.execute(createMemberDto);
    }
};
exports.MemberController = MemberController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(new validation_pipe_1.ZodValidationPipe(create_member_1.createMemberSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MemberController.prototype, "createMember", null);
exports.MemberController = MemberController = __decorate([
    (0, common_1.Controller)('members'),
    __metadata("design:paramtypes", [create_member_2.CreateMemberUseCase])
], MemberController);
//# sourceMappingURL=member.controler.js.map