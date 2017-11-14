import {Session} from "../model/Session";

export interface IGuard{

    transform(session:Session, req:any, res:any):boolean;
    getErrorCode():any;
}