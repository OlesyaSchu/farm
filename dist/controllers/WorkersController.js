"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@overnightjs/core");
const validateOperator_1 = __importDefault(require("../middleware/validateOperator"));
const farm_1 = __importDefault(require("../services/workers/farm"));
let WorkersController = class WorkersController {
    changeStatus(req, res) {
        const status = +req.params.status;
        const { address } = req.params;
        const { operator } = req.meta;
        if ([0, 1].indexOf(status) === -1) {
            return res.status(400);
        }
        const worker = farm_1.default.changeWorkerStatus(operator.id, address, status);
        return res.status(200).json(worker);
    }
    getAll(req, res) {
        res.status(200).json(farm_1.default.getWorkers());
    }
};
__decorate([
    core_1.Put(':address/:status'),
    core_1.Middleware(validateOperator_1.default)
], WorkersController.prototype, "changeStatus", null);
__decorate([
    core_1.Get()
], WorkersController.prototype, "getAll", null);
WorkersController = __decorate([
    core_1.Controller('api/workers')
], WorkersController);
exports.WorkersController = WorkersController;
//# sourceMappingURL=WorkersController.js.map