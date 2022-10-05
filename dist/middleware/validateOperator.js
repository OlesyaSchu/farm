"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Operators_1 = __importDefault(require("../models/Operators"));
function validateOperator(req, res, next) {
    const key = req.headers.authorization.slice(7);
    const operator = Operators_1.default.findByKey(key);
    if (!operator) {
        return res.status(401);
    }
    if (!req.meta) {
        req.meta = { operator };
    }
    next();
}
exports.default = validateOperator;
//# sourceMappingURL=validateOperator.js.map