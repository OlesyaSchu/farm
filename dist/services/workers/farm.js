"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const worker_1 = __importDefault(require("./worker"));
class Farm {
    static createWorker(role, operatorId, address) {
        const worker = new worker_1.default(role, operatorId, address);
        Farm.workers[worker.address] = worker;
        return worker;
    }
    static changeWorkerStatus(operatorId, address, status) {
        const worker = Farm.workers[address];
        if (!worker) {
            throw new Error(`Worker ${address} not found`);
        }
        if (worker.operatorId !== operatorId) {
            throw new Error(`Worker ${address}: wrong operatorId`);
        }
        worker.changeStatus(status);
        return worker;
    }
    static getWorkers() {
        return Object.values(Farm.workers);
    }
}
Farm.workers = {};
exports.default = Farm;
Farm.createWorker(1, 1, 'a');
Farm.createWorker(0, 2, 'b');
Farm.createWorker(0, 1, 'c');
//# sourceMappingURL=farm.js.map