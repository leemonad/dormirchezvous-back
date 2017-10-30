import { SubscriptionModel } from "../../model/SubscriptionModel";
import { SubscriptionVO } from "../../model/vo/SubscriptionVO";

export class UpdateSubscriptionsController {

    static create(req: any, res: any): UpdateSubscriptionsController {
        return new UpdateSubscriptionsController(req, res);
    }

    constructor(req: any, res: any) {

        const vo: SubscriptionVO = new SubscriptionVO();

        if (req.params.id !== undefined) {
            vo.announce_id = parseInt(req.body.announce_id);
            vo.approved = (parseInt(req.body.approved) == 1);
            vo.msg = req.body.msg;
            vo.id = parseInt(req.params.id);
            SubscriptionModel.getInstance().update(vo);
        }


        res.setHeader("Content-Type", "application/json");
        res.send(200, JSON.stringify({ code: "ok" }));
    }
}