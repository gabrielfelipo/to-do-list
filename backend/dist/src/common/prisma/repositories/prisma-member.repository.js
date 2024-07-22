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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaMemberRepository = void 0;
const prisma_service_1 = require("../prisma.service");
const common_1 = require("@nestjs/common");
const member_repository_1 = require("../../../modules/member/repositories/member.repository");
const member_mapper_1 = require("../mappers/member.mapper");
let PrismaMemberRepository = class PrismaMemberRepository extends member_repository_1.MemberRepository {
    constructor(prisma) {
        super();
        this.prisma = prisma;
    }
    async create(member) {
        await this.prisma.member.create({
            data: member_mapper_1.MemberMapper.toPersistence(member),
        });
        return member;
    }
    async findById(id) {
        const member = await this.prisma.member.findUnique({
            where: { id },
        });
        if (!member)
            return null;
        return member_mapper_1.MemberMapper.toDomain(member);
    }
    findByEmail(email) {
        throw new Error('Method not implemented.');
    }
};
exports.PrismaMemberRepository = PrismaMemberRepository;
exports.PrismaMemberRepository = PrismaMemberRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaMemberRepository);
//# sourceMappingURL=prisma-member.repository.js.map