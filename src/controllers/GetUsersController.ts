import {UserModel} from "../model/UserModel";

export class GetUsersController {

    static create(req: any, res: any): GetUsersController {
        return new GetUsersController(req, res);
    }

    constructor(req: any, res: any) {
        res.setHeader("Content-Type", "application/json");
        res.send(200, JSON.stringify(
            UserModel.getInstance().getAll()
        ));
    }
}