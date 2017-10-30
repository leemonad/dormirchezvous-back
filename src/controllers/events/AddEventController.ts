import {EventModel} from "../../model/EventModel";
import {EventVO} from "../../model/vo/EventVO";

export class AddEventController {

    static create(req: any, res: any): AddEventController {
        return new AddEventController(req, res);
    }

    constructor(req: any, res: any) {

        const vo:EventVO = new EventVO(); 

        vo.locked = (parseInt(req.body.locked) == 1);
        vo.name = req.body.name;

        EventModel.getInstance().add(vo);

        res.setHeader("Content-Type", "application/json");
        res.send(200, JSON.stringify({code:"ok"}));
    }
}