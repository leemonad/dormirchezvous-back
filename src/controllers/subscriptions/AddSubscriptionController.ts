import {SubscriptionModel} from "../../model/SubscriptionModel";
import {SubscriptionVO} from "../../model/vo/SubscriptionVO";

export class AddSubscriptionController {

    static create(req: any, res: any): AddSubscriptionController {
        return new AddSubscriptionController(req, res);
    }

    constructor(req: any, res: any) {

        const vo:SubscriptionVO = new SubscriptionVO(); 

        vo.announce_id = parseInt(req.body.announce_id);
        vo.approved = (parseInt(req.body.approved) == 1);
        vo.msg = req.body.msg;

        SubscriptionModel.getInstance().add(vo);

        res.setHeader("Content-Type", "application/json");
        res.send(200, JSON.stringify({code:"ok"}));
    }
}