import {BAD_PARAM_ERROR} from "../config/app.constants";
import {IGuard} from "./IGuard";
import {Session} from "../model/Session";

export class IdParamGuard implements IGuard{
    
    public transform (session:Session,req:any, res:any):boolean{
        const params:any = req.params;
        return !isNaN(parseInt(params.id));
    }

    public getErrorCode():any{
        return BAD_PARAM_ERROR;
    }
}