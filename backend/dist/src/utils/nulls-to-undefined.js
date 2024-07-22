"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nullsToUndefined = nullsToUndefined;
function nullsToUndefined(obj) {
    const result = {};
    for (const key in obj) {
        result[key] = obj[key] === null ? undefined : obj[key];
    }
    return result;
}
//# sourceMappingURL=nulls-to-undefined.js.map