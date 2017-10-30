import {UserModel} from "../../model/UserModel";
import {UserVO} from "../../model/vo/UserVO";

export class AddUserController {

    static create(req: any, res: any): AddUserController {
        return new AddUserController(req, res);
    }

    constructor(req: any, res: any) {

        const vo:UserVO = new UserVO(); 

        vo.address  = req.body.address;
        vo.city     = req.body.city;
        vo.name     = req.body.name;
        vo.phone    = req.body.phone;
        vo.surname  = req.body.surname;
        vo.zipcode  = req.body.zipcode;

        UserModel.getInstance().add(vo);

        res.setHeader("Content-Type", "application/json");
        res.send(200, JSON.stringify({code:"ok"}));
    }
}