import { Session } from "../model/Session";
import {MYSQL_ERROR} from "../config/app.constants";

export abstract class AbstractController {


    protected _req: any;
    protected _res: any;
    protected _data: any;
    protected _session:Session;

    constructor(session:Session, req: any, res: any) {
        this._req = req;
        this._res = res;
        this._data = null;
        this._session = session;
        this._mysqlErrorHandler = this._mysqlErrorHandler.bind(this);

        switch (req.method) {
            case "GET": this.get(); break;
            case "POST": this.post(); break;
            case "DELETE": this.delete(); break;
            case "PUT": this.put(); break;
        }
    }

    
    public getUserInput(): any {
        return this._req.body.data;
    }

    public getUserParams(): any {
        return this._req.params;
    }


    public setOutput(value: any): void {
        this._data = value;
    }

    public send() {
        this._session.updateToken();

        const output: Object = {
            token: this._session.getCurrentToken(),
            data: this._data
        };

        this._res.setHeader("Content-Type", "application/json");
        this._res.send(200, JSON.stringify(output));
    }

    public put(): void { }
    public post(): void { }
    public get(): void { }
    public delete(): void { }

    protected _mysqlErrorHandler(error:any):void{
        this.setOutput(error);
        this.send();
    }


}