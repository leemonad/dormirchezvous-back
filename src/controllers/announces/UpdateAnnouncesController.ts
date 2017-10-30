import { AnnounceModel } from "../../model/AnnounceModel";
import { AnnounceVO } from "../../model/vo/AnnounceVO";

export class UpdateAnnouncesController {

    static create(req: any, res: any): UpdateAnnouncesController {
        return new UpdateAnnouncesController(req, res);
    }

    constructor(req: any, res: any) {

        const vo: AnnounceVO = new AnnounceVO();

        if (req.params.id !== undefined) {
            vo.description  = req.body.description;
            vo.event_id     = parseInt(req.body.event_id);
            vo.num_places   = parseInt(req.body.num_places);
            vo.user_id      = parseInt(req.body.user_id);
            vo.id           = parseInt(req.params.id);
            AnnounceModel.getInstance().update(vo);
        }


        res.setHeader("Content-Type", "application/json");
        res.send(200, JSON.stringify({ code: "ok" }));
    }
}