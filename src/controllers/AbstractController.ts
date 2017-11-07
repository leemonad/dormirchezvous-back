import { SessionModel } from "../model/SessionModel";

export abstract class AbstractController {


    protected _req: any;
    protected _res: any;
    protected _data: any;

    constructor(req: any, res: any) {
        this._req = req;
        this._res = res;
        this._data = null;

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

        SessionModel.getInstance().updateToken(this._req);

        const output: Object = {
            token: SessionModel.getInstance().getCurrentToken(this._req),
            data: this._data
        };

        this._res.setHeader("Content-Type", "application/json");
        this._res.send(200, JSON.stringify(output));
    }

    public put(): void { }
    public post(): void { }
    public get(): void { }
    public delete(): void { }


}