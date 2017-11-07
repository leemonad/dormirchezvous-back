import {SessionModel} from "../model/SessionModel";
import {NOT_CONNECTED_ERROR} from "../config/app.constants";
import {IGuard} from "./IGuard";

export class AuthGuard implements IGuard{

    public transform (req:any, res:any):boolean{
        return SessionModel.getInstance().isConnected(req);
    }

    public getErrorCode():any{
        return NOT_CONNECTED_ERROR;
    }

}