import {SubscriptionModel} from "../../model/SubscriptionModel";
import {SubscriptionVO} from "../../model/vo/SubscriptionVO";

export class RemoveSubscriptionController {

    static create(req: any, res: any): RemoveSubscriptionController {
        return new RemoveSubscriptionController(req, res);
    }

    constructor(req: any, res: any) {

        if( req.params.id !== undefined )
            SubscriptionModel.getInstance().remove(parseInt(req.params.id));


        res.setHeader("Content-Type", "application/json");
        res.send(200, JSON.stringify({code:"ok"}));
    }
}