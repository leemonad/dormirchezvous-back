import * as md5 from "md5";

export class Session {


    private static _instance: Session;


    constructor(session: any) {
        this._session = session || {};
    }

    private _session: any;

    public updateToken(): void {
        const current: number = new Date().getTime();
        const rand: number = Math.random() * current;
        const token: string = md5("insoumniaque_" + rand);
        this._session.token = token;
    }

    public getCurrentToken(): string {
        return this._session.token;
    }

    public setUserId(id: number): void {
        this._session.user_id = id;
    }

    public getUserId(): number {
        return this._session.user_id;
    }

    public connect(): void {
        this._session.connected = true;
    }

    public disconnect(): void {
        this._session.connected = false;
    }

    public isConnected(): boolean {
        return this._session.connected as boolean;
    }

}