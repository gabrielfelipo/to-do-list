"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoneElementError = void 0;
const _1 = require(".");
class NoneElementError {
    constructor(message) {
        this.error = 'NoneElement Error';
        this.code = _1.ErrorCodes.NONE_ELEMENT_ERROR;
        this.response = { message };
    }
}
exports.NoneElementError = NoneElementError;
//# sourceMappingURL=not-found-error.js.map