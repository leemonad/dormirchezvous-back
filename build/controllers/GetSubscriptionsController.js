"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SubscriptionModel_1 = require("../model/SubscriptionModel");
class GetSubscriptionsController {
    static create(req, res) {
        return new GetSubscriptionsController(req, res);
    }
    constructor(req, res) {
        res.setHeader("Content-Type", "application/json");
        res.send(200, JSON.stringify(SubscriptionModel_1.SubscriptionModel.getInstance().getAll()));
    }
}
exports.GetSubscriptionsController = GetSubscriptionsController;
//# sourceMappingURL=GetSubscriptionsController.js.map