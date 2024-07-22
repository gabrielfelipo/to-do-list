"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const node_crypto_1 = __importDefault(require("node:crypto"));
class Entity {
    get id() {
        return this._id;
    }
    constructor(props, id) {
        console.log('random ');
        console.log('teste ', node_crypto_1.default.randomUUID());
        this._id = id || node_crypto_1.default.randomUUID();
        console.log('pos ', id);
        this.props = props;
    }
    equals(object) {
        if (object === null || object === undefined) {
            return false;
        }
        if (this === object) {
            return true;
        }
        if (!(object instanceof Entity)) {
            return false;
        }
        return this._id === object._id;
    }
}
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map