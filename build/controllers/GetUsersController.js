"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = require("../model/UserModel");
class GetUsersController {
    static create(req, res) {
        return new GetUsersController(req, res);
    }
    constructor(req, res) {
        res.setHeader("Content-Type", "application/json");
        res.send(200, JSON.stringify(UserModel_1.UserModel.getInstance().getAll()));
    }
}
exports.GetUsersController = GetUsersController;
//# sourceMappingURL=GetUsersController.js.map