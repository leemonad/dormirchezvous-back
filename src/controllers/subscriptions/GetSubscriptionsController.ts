import { SubscriptionModel } from "../../model/SubscriptionModel";
import { SubscriptionVO } from "../../model/vo/SubscriptionVO";

export class GetSubscriptionsController {

    static create(req: any, res: any): GetSubscriptionsController {
        return new GetSubscriptionsController(req, res);
    }

    constructor(req: any, res: any) {

        if( req.params.id )
        {
            SubscriptionModel.getInstance().get( parseInt(req.params.id)).then(
                (row: SubscriptionVO) => {
                    res.setHeader("Content-Type", "application/json");
                    res.send(200, JSON.stringify(row));
                }
            )
        }
        else
        {
            SubscriptionModel.getInstance().getAll().then(
                (rows: SubscriptionVO[]) => {
                    res.setHeader("Content-Type", "application/json");
                    res.send(200, JSON.stringify(rows));
                }
            );
        }
        

    }
}