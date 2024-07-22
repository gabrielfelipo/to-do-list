"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMemberUseCase = void 0;
const common_1 = require("@nestjs/common");
const Either_1 = require("../../../common/logic/Either");
const Member_1 = require("../entities/Member");
const member_repository_1 = require("../repositories/member.repository");
const bcrypt = __importStar(require("bcrypt"));
let CreateMemberUseCase = class CreateMemberUseCase {
    constructor(memberRepository) {
        this.memberRepository = memberRepository;
    }
    async execute(payload) {
        console.log('teste');
        const member = Member_1.Member.create({
            name: payload.name,
            email: payload.email,
            password: await bcrypt.hash(payload.password, 10),
        });
        console.log('teste');
        console.log('teste');
        await this.memberRepository.create(member);
        return (0, Either_1.right)({
            message: 'Member created successfuly',
            response: { member },
        });
    }
};
exports.CreateMemberUseCase = CreateMemberUseCase;
exports.CreateMemberUseCase = CreateMemberUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [member_repository_1.MemberRepository])
], CreateMemberUseCase);
//# sourceMappingURL=create-member.js.map