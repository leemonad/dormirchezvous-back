import { AbstractController } from "./AbstractController";
import {Session} from "../model/Session";
import {AUTH_OK, BAD_HTTP_VERB_ERROR} from "../config/app.constants";

export class AuthController extends AbstractController {

    static create(session:Session, req: any, res: any): AuthController {
        return new AuthController(session, req, res);
    }

    constructor(session:Session, req: any, res: any) {
        super(session, req, res);
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

        this._session.setUserId(1);
        this._session.connect();
        this.setOutput(AUTH_OK);
        this.send();
    }

}