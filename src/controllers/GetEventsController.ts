import {EventModel} from "../model/EventModel";

export class GetEventsController {

    static create(req: any, res: any): GetEventsController {
        return new GetEventsController(req, res);
    }

    constructor(req: any, res: any) {
        res.setHeader("Content-Type", "application/json");
        res.send(200, JSON.stringify(
            EventModel.getInstance().getAll()
        ));
    }
}