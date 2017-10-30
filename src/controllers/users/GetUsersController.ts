import { UserModel } from "../../model/UserModel";
import { UserVO } from "../../model/vo/UserVO";

export class GetUsersController {

    static create(req: any, res: any): GetUsersController {
        return new GetUsersController(req, res);
    }

    constructor(req: any, res: any) {

        if( req.params.id )
        {
            UserModel.getInstance().get( parseInt(req.params.id)).then(
                (row: UserVO) => {
                    res.setHeader("Content-Type", "application/json");
                    res.send(200, JSON.stringify(row));
                }
            )
        }
        else
        {
            UserModel.getInstance().getAll().then(
                (rows: UserVO[]) => {
                    res.setHeader("Content-Type", "application/json");
                    res.send(200, JSON.stringify(rows));
                }
            );
        }
        

    }
}