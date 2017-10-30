import { UserModel } from "../../model/UserModel";
import { UserVO } from "../../model/vo/UserVO";

export class UpdateUsersController {

    static create(req: any, res: any): UpdateUsersController {
        return new UpdateUsersController(req, res);
    }

    constructor(req: any, res: any) {

        const vo: UserVO = new UserVO();

        if (req.params.id !== undefined) {
            vo.address  = req.body.address;
            vo.city     = req.body.city;
            vo.name     = req.body.name;
            vo.phone    = req.body.phone;
            vo.surname  = req.body.surname;
            vo.zipcode  = req.body.zipcode;
            vo.id = parseInt(req.params.id);
            UserModel.getInstance().update(vo);
        }


        res.setHeader("Content-Type", "application/json");
        res.send(200, JSON.stringify({ code: "ok" }));
    }
}