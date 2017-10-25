import {SubscriptionModel} from "../model/SubscriptionModel";

export class GetSubscriptionsController {

    static create(req: any, res: any): GetSubscriptionsController {
        return new GetSubscriptionsController(req, res);
    }

    constructor(req: any, res: any) {
        res.setHeader("Content-Type", "application/json");
        res.send(200, JSON.stringify(
            SubscriptionModel.getInstance().getAll()
        ));
    }
}