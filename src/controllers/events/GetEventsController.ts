import { EventModel } from "../../model/EventModel";
import { EventVO } from "../../model/vo/EventVO";

export class GetEventsController {

    static create(req: any, res: any): GetEventsController {
        return new GetEventsController(req, res);
    }

    constructor(req: any, res: any) {

        if( req.params.id )
        {
            EventModel.getInstance().get( parseInt(req.params.id)).then(
                (row: EventVO) => {
                    res.setHeader("Content-Type", "application/json");
                    res.send(200, JSON.stringify(row));
                }
            )
        }
        else
        {
            EventModel.getInstance().getAll().then(
                (rows: EventVO[]) => {
                    res.setHeader("Content-Type", "application/json");
                    res.send(200, JSON.stringify(rows));
                }
            );
        }
        

    }
}