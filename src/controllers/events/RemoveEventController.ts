import {EventModel} from "../../model/EventModel";
import {EventVO} from "../../model/vo/EventVO";

export class RemoveEventController {

    static create(req: any, res: any): RemoveEventController {
        return new RemoveEventController(req, res);
    }

    constructor(req: any, res: any) {

        if( req.params.id !== undefined )
            EventModel.getInstance().remove(parseInt(req.params.id));


        res.setHeader("Content-Type", "application/json");
        res.send(200, JSON.stringify({code:"ok"}));
    }
}