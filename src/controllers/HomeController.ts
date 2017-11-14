import {OK} from "../config/app.constants";
import {Database} from "../model/Database";

export class HomeController {

    static create(req: any, res: any): HomeController {
        return new HomeController(req, res);
    }

    constructor(req: any, res: any) {

        Database.getInstance().ping().then(
            () => {
                res.setHeader("Content-Type", "application/json");
                res.send(200, JSON.stringify(OK));
            }
        ).catch(
            (error:any) => {
                res.setHeader("Content-Type", "application/json");
                res.send(200, JSON.stringify(error));
            }
        )
        
    }
}