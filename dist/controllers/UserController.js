"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@overnightjs/core");
let UserController = class UserController {
    constructor() {
        this.users = Array({ id: 1, name: "Akhil" }, { id: 2, name: "Anil" }, { id: 3, name: "Prakash" }, { id: 4, name: "Meera" });
    }
    get(req, res) {
        // tslint:disable-next-line:no-console
        console.log(req.params.id);
        return res.status(200).json(this.users.find((x) => x.id === parseInt(req.params.id, 10)));
    }
    getAll(req, res) {
        res.status(200).json(this.users);
    }
    add(req, res) {
        res.status(200).json({ msg: "add_called by user" });
    }
    update(req, res) {
        res.status(200).json({ msg: "update_called" });
    }
    // Next param is optional
    delete(req, res, next) {
        const index = this.users.indexOf(this.users.find((x) => x.id === parseInt(req.params.id, 10)));
        this.users.splice(index, 1);
        res.status(200).json({ msg: "delete_called" });
    }
    // async/await work normally :)
    getWithAsync(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let msg;
            try {
                msg = yield this.someMethodWhichReturnsAPromise(req);
            }
            catch (err) {
                msg = err;
            }
            finally {
                res.status(200).json({ msg });
            }
        });
    }
    someMethodWhichReturnsAPromise(req) {
        return new Promise((resolve, reject) => { resolve("This is async"); });
    }
};
__decorate([
    core_1.Get(":id")
], UserController.prototype, "get", null);
__decorate([
    core_1.Get()
], UserController.prototype, "getAll", null);
__decorate([
    core_1.Post()
], UserController.prototype, "add", null);
__decorate([
    core_1.Put("update-user")
], UserController.prototype, "update", null);
__decorate([
    core_1.Delete("delete/:id")
], UserController.prototype, "delete", null);
__decorate([
    core_1.Get("practice/async")
], UserController.prototype, "getWithAsync", null);
UserController = __decorate([
    core_1.Controller("api/users")
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map