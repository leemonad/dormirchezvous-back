import * as md5 from "md5";

export class SessionModel{


    private static _instance: SessionModel;
    
        public static getInstance(): SessionModel {
            SessionModel._instance = SessionModel._instance || new SessionModel();
            return SessionModel._instance;
        }
    
        constructor() { }

        public updateToken(req:any):void
        {
            if( req.session !== undefined )
            {
                const current:number = new Date().getTime();
                const rand:number = Math.random() * current;
                const str:string = "insoumniaque_" + rand;
                req.session.token = md5(str);
            }
        }

        public getCurrentToken(req:any):string
        {
            if( req.session !== undefined)
            {
                return req.session.token;
            }
            else
            {
                return null;
            }
        }
    
        public disconnect(req:any):void
        {
            if( req.session !== undefined)
            {
                req.session.connected = false; 
                req.session.token = null;
            }
        }
    
        public connect(req:any):boolean
        {
            if( req.session !== undefined )
            {
                req.session.connected = true; 
                this.updateToken(req);
                return true;
            }
            else
            {
                return false;
            }
        }
    
        public isConnected(req:any):boolean
        {
            return ( req.session !== undefined && req.session.connected === true );
        }
    
        public authorized(token:string, req:any):boolean
        {
            return ( this.isConnected(req) === true && req.session.token === token );
        }

}