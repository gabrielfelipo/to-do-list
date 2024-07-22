"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
const entity_1 = require("../../../common/entities/entity");
class Member extends entity_1.Entity {
    get name() {
        return this.props.name;
    }
    get email() {
        return this.props.email;
    }
    get password() {
        return this.props.password;
    }
    get _serialized() {
        const serializedTasks = [];
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password,
        };
    }
    static create(props, id) {
        console.log(id);
        const member = new Member(props, id);
        return member;
    }
}
exports.Member = Member;
//# sourceMappingURL=Member.js.map