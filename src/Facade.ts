import { IGuard } from "./guards/IGuard";
import { BAD_HTTP_VERB_ERROR, BAD_URI_ERROR } from "./config/app.constants";
import {AbstractController} from "./controllers/AbstractController";
import {Session} from "./model/Session";



export class Facade {

    private static _instance: Facade;
    public static getInstance(): Facade {
        Facade._instance = Facade._instance || new Facade();
        return Facade._instance;
    }




    private _map: any;

    constructor() {
        this._map = new Object();
    }

    private _getInfos(alias: string): any {
        return this._map[alias] || null;
    }

    private _isValidVerb(verb: string): boolean {
        let verbs: Array<string> = ["GET", "POST", "PUT", "DELETE"];
        let current:string = verb.toUpperCase();
        return (verbs.indexOf(current) > -1);
    }

    private _doGuards(guards: IGuard[],session:Session,  req: any, res: any): any {

        let i: number = 0;
        let max: number = guards.length;

        for (i = 0; i < max; i++) {
            if (guards[i].transform(session, req, res) === false) {
                return guards[i].getErrorCode();
            }
        }

        return null;
    }

    public register(alias: string,
        factory: Function,
        get_guards: IGuard[],
        post_guards: IGuard[],
        put_guards: IGuard[],
        delete_guards: IGuard[]
    ): void {
        this._map[alias] = {
            factory: factory,
            get_guards: get_guards,
            post_guards: post_guards,
            put_guards: put_guards,
            delete_guards: delete_guards
        };
    }

    public create(alias:string):any{
        return this.do.bind(this, [alias]);
    }

    public do(alias: string, req: any, res: any): void {

        
        const infos: any                    = this._getInfos(alias);
        const session:Session               = new Session(req.session);
        let controller:AbstractController   = null;
        let guardError: any                 = null;
        let guards: IGuard[]                = null;
        let func:Function                   = null;
        let i: number                       = 0;
        let max: number                     = 0;


        if (infos === null) {
            res.setHeader("Content-Type", "application/json");
            res.send(200, JSON.stringify(BAD_URI_ERROR));
            return;
        }

        if (this._isValidVerb(req.method) === false) {
            res.setHeader("Content-Type", "application/json");
            res.send(200, JSON.stringify(BAD_HTTP_VERB_ERROR));
            return;
        }

        switch (req.method) {
            case "GET"      : guardError = this._doGuards(infos.get_guards, session, req, res)   ; break;
            case "POST"     : guardError = this._doGuards(infos.post_guards,session,  req, res)  ; break;
            case "DELETE"   : guardError = this._doGuards(infos.delete_guards,session,  req, res); break;
            case "PUT"      : guardError = this._doGuards(infos.put_guards,session,  req, res)   ; break;
        }

        if( guardError != null )
        {
            res.setHeader("Content-Type", "application/json");
            res.send(200, JSON.stringify(guardError));
        }
        else
        {
            func = infos.factory as Function;
            func.apply(this, [session, req, res]);
        }

    }

}