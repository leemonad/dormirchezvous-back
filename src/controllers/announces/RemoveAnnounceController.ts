import {AnnounceModel} from "../../model/AnnounceModel";
import {AnnounceVO} from "../../model/vo/AnnounceVO";

export class RemoveAnnounceController {

    static create(req: any, res: any): RemoveAnnounceController {
        return new RemoveAnnounceController(req, res);
    }

    constructor(req: any, res: any) {

        if( req.params.id !== undefined )
            AnnounceModel.getInstance().remove(parseInt(req.params.id));


        res.setHeader("Content-Type", "application/json");
        res.send(200, JSON.stringify({code:"ok"}));
    }
}