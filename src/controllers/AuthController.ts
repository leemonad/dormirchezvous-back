import { AbstractController } from "./AbstractController";
import {SessionModel} from "../model/SessionModel";
import {AUTH_OK, BAD_HTTP_VERB_ERROR} from "../config/app.constants";

export class AuthController extends AbstractController {

    static create(req: any, res: any): AuthController {
        return new AuthController(req, res);
    }

    constructor(req: any, res: any) {
        super(req, res);
    }

    public get():void{
        this.setOutput(BAD_HTTP_VERB_ERROR);
        this.send();
    }

    public put():void{
        this.setOutput(BAD_HTTP_VERB_ERROR);
        this.send();
    }

    public delete():void{
        this.setOutput(BAD_HTTP_VERB_ERROR);
        this.send();
    }

    // auto connect ... @Buzugu c'est pour toi ici c'est l'oAuth à implémenter
    public post(): void {
        SessionModel.getInstance().connect(this._req);
        this.setOutput(AUTH_OK);
        this.send();
    }

}