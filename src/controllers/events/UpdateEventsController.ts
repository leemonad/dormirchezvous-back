import { EventModel } from "../../model/EventModel";
import { EventVO } from "../../model/vo/EventVO";

export class UpdateEventsController {

    static create(req: any, res: any): UpdateEventsController {
        return new UpdateEventsController(req, res);
    }

    constructor(req: any, res: any) {

        const vo: EventVO = new EventVO();

        if (req.params.id !== undefined) {
            vo.locked = ( parseInt(req.body.locked) == 1 );
            vo.name = req.body.name;
            vo.id = parseInt(req.params.id);
            EventModel.getInstance().update(vo);
        }


        res.setHeader("Content-Type", "application/json");
        res.send(200, JSON.stringify({ code: "ok" }));
    }
}