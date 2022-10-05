"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@overnightjs/core");
const bodyParser = __importStar(require("body-parser"));
const WorkersController_1 = require("./controllers/WorkersController");
class MainServer extends core_1.Server {
    constructor() {
        super();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.setupControllers();
    }
    start(port) {
        this.app.listen(port, () => {
            // tslint:disable-next-line:no-console
            console.log('Server listening on port: ' + port);
        });
    }
    setupControllers() {
        const workersController = new WorkersController_1.WorkersController();
        // This must be called, and can be passed a single controller or an array of
        // controllers. Optional router object can also be passed as second argument.
        super.addControllers([workersController]);
    }
}
exports.default = MainServer;
//# sourceMappingURL=Server.js.map