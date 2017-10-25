"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AnnounceModel_1 = require("../model/AnnounceModel");
class GetAnnouncesController {
    static create(req, res) {
        return new GetAnnouncesController(req, res);
    }
    constructor(req, res) {
        res.setHeader("Content-Type", "application/json");
        res.send(200, JSON.stringify(AnnounceModel_1.AnnounceModel.getInstance().getAll()));
    }
}
exports.GetAnnouncesController = GetAnnouncesController;
//# sourceMappingURL=GetAnnouncesController.js.map