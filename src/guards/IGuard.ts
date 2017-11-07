export interface IGuard{
    transform(req:any, res:any):boolean;
    getErrorCode():any;
}