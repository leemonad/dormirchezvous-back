import {OK} from "../config/app.constants";

export class HomeController {

    static create(req: any, res: any): HomeController {
        return new HomeController(req, res);
    }

    constructor(req: any, res: any) {
        res.setHeader("Content-Type", "application/json");
        res.send(200, JSON.stringify(OK));
    }
}