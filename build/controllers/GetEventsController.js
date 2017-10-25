"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventModel_1 = require("../model/EventModel");
class GetEventsController {
    static create(req, res) {
        return new GetEventsController(req, res);
    }
    constructor(req, res) {
        res.setHeader("Content-Type", "application/json");
        res.send(200, JSON.stringify(EventModel_1.EventModel.getInstance().getAll()));
    }
}
exports.GetEventsController = GetEventsController;
//# sourceMappingURL=GetEventsController.js.map