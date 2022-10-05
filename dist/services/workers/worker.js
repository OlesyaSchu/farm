"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MIN_BALANCE = 100000;
class Worker {
    constructor(role, operatorId, address) {
        // 0 - свободен, 1 - отключен вручную,
        // 2 - отключен из-за баланса ниже нормы, 3 - занят задачей
        this.status = 0;
        this.role = role;
        this.operatorId = operatorId;
        this.address = address;
    }
    changeStatus(status) {
        this.status = status;
    }
    getBalance() {
        const balance = 1; // just example
        // call address balance with ethers
        if (balance < MIN_BALANCE) {
            this.status = 2;
        }
        return balance;
    }
}
exports.default = Worker;
//# sourceMappingURL=worker.js.map