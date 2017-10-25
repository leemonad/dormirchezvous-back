import {AnnounceModel} from "../model/AnnounceModel";

export class GetAnnouncesController {

    static create(req: any, res: any): GetAnnouncesController {
        return new GetAnnouncesController(req, res);
    }

    constructor(req: any, res: any) {
        res.setHeader("Content-Type", "application/json");
        res.send(200, JSON.stringify(
            AnnounceModel.getInstance().getAll()
        ));
    }
}