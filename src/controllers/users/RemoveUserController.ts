import {UserModel} from "../../model/UserModel";
import {UserVO} from "../../model/vo/UserVO";

export class RemoveUserController {

    static create(req: any, res: any): RemoveUserController {
        return new RemoveUserController(req, res);
    }

    constructor(req: any, res: any) {

        if( req.params.id !== undefined )
            UserModel.getInstance().remove(parseInt(req.params.id));


        res.setHeader("Content-Type", "application/json");
        res.send(200, JSON.stringify({code:"ok"}));
    }
}