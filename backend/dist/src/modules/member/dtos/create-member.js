"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMemberSchema = void 0;
const zod_1 = require("zod");
exports.createMemberSchema = zod_1.z.object({
    name: zod_1.z.string().min(5, 'Name is too short'),
    email: zod_1.z.string(),
    password: zod_1.z.string().min(3, 'Password is too short'),
});
//# sourceMappingURL=create-member.js.map