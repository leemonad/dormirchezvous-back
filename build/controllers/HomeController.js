"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HomeController {
    static create(req, res) {
        return new HomeController(req, res);
    }
    constructor(req, res) {
        res.setHeader("Content-Type", "application/json");
        res.send(200, JSON.stringify({ msg: "It works" }));
    }
}
exports.HomeController = HomeController;
//# sourceMappingURL=HomeController.js.map