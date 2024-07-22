"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = void 0;
const _1 = require(".");
class UnauthorizedError {
    constructor(message) {
        this.error = 'Unauthorized Error';
        this.code = _1.ErrorCodes.UNAUTHORIZED_ERROR;
        this.response = { message: message ?? 'Unauthorized access' };
    }
}
exports.UnauthorizedError = UnauthorizedError;
//# sourceMappingURL=unauthoraized-error.js.map