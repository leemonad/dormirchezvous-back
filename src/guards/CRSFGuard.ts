import {Session} from "../model/Session";
import {BAD_CRSF_TOKEN_ERROR} from "../config/app.constants";
import {IGuard} from "./IGuard";

export class CRSFGuard implements IGuard{

    public transform (session:Session, req:any, res:any):boolean{
        
        const body_token:string = req.body.token;
        const param_token:string = req.params.token;

        if( body_token !== undefined )
        {
            return (session.getCurrentToken() === body_token);
        }
        else
        {
            return (session.getCurrentToken() === param_token);
        }

    }

    public getErrorCode():any{
        return BAD_CRSF_TOKEN_ERROR;
    }
}