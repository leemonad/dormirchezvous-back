import {SessionModel} from "../model/SessionModel";
import {BAD_CRSF_TOKEN_ERROR} from "../config/app.constants";
import {IGuard} from "./IGuard";

export class CRSFGuard implements IGuard{

    public transform (req:any, res:any):boolean{
        const token:string = req.body.token;
        return SessionModel.getInstance().authorized(token, req);
    }

    public getErrorCode():any{
        return BAD_CRSF_TOKEN_ERROR;
    }
}