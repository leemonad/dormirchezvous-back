import {AnnounceModel} from "../../model/AnnounceModel";
import {AnnounceVO} from "../../model/vo/AnnounceVO";

export class AddAnnounceController {

    static create(req: any, res: any): AddAnnounceController {
        return new AddAnnounceController(req, res);
    }

    constructor(req: any, res: any) {

        const vo:AnnounceVO = new AnnounceVO(); 

        vo.description  = req.body.description;
        vo.event_id     = parseInt(req.body.event_id);
        vo.num_places   = parseInt(req.body.num_places);
        vo.user_id      = parseInt(req.body.user_id);

        AnnounceModel.getInstance().add(vo);

        res.setHeader("Content-Type", "application/json");
        res.send(200, JSON.stringify({code:"ok"}));
    }
}