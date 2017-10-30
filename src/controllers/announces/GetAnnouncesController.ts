import { AnnounceModel } from "../../model/AnnounceModel";
import { AnnounceVO } from "../../model/vo/AnnounceVO";

export class GetAnnouncesController {

    static create(req: any, res: any): GetAnnouncesController {
        return new GetAnnouncesController(req, res);
    }

    constructor(req: any, res: any) {

        if( req.params.id )
        {
            AnnounceModel.getInstance().get( parseInt(req.params.id)).then(
                (row: AnnounceVO) => {
                    res.setHeader("Content-Type", "application/json");
                    res.send(200, JSON.stringify(row));
                }
            )
        }
        else
        {
            AnnounceModel.getInstance().getAll().then(
                (rows: AnnounceVO[]) => {
                    res.setHeader("Content-Type", "application/json");
                    res.send(200, JSON.stringify(rows));
                }
            );
        }
        

    }
}