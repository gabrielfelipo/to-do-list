"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitReachedError = void 0;
const _1 = require(".");
class LimitReachedError {
    constructor(message) {
        this.error = 'LimitReached Error';
        this.code = _1.ErrorCodes.LIMIT_REACHED_ERROR;
        this.response = { message };
    }
}
exports.LimitReachedError = LimitReachedError;
//# sourceMappingURL=limit-reached-error.js.map