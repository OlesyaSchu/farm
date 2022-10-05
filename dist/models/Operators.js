"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Operators {
    static findByKey(key) {
        return Operators.list.find((operator) => operator.key === key);
    }
}
Operators.list = [
    {
        id: 1,
        key: 'abc',
        chainid: 1,
    },
    {
        id: 2,
        key: 'def',
        chainid: 1,
    },
];
exports.default = Operators;
//# sourceMappingURL=Operators.js.map