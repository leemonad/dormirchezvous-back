"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorController {
    static create(req, res) {
        return new ErrorController(req, res);
    }
    constructor(req, res) {
        res.setHeader("Content-Type", "application/json");
        res.send(404, JSON.stringify({ msg: "Not Found" }));
    }
}
exports.ErrorController = ErrorController;
//# sourceMappingURL=ErrorController.js.map