"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberMapper = void 0;
const Member_1 = require("../../../modules/member/entities/Member");
const nulls_to_undefined_1 = require("../../../utils/nulls-to-undefined");
class MemberMapper {
    static toDomain(raw_) {
        const raw = (0, nulls_to_undefined_1.nullsToUndefined)(raw_);
        return Member_1.Member.create({ name: raw.name, email: raw.email, password: raw.password }, raw.id);
    }
    static toPersistence(member) {
        return {
            name: member.name,
            email: member.email,
            password: member.password
        };
    }
}
exports.MemberMapper = MemberMapper;
//# sourceMappingURL=member.mapper.js.map