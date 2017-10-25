import {AnnounceVO} from "./vo/AnnounceVO";

export class AnnounceModel{

    private static _instance:AnnounceModel;
    public static getInstance():AnnounceModel
    {
        AnnounceModel._instance = AnnounceModel._instance || new AnnounceModel();
        return AnnounceModel._instance;
    }
    
    constructor(){}

    // do some update stuff
    public update():void{}

    public add(p_vo:AnnounceVO):void
    {
        this.getAll().push(p_vo);
    }

    public remove(p_id:number):void
    {
        let users:AnnounceVO[] = this.getAll();
        users.splice(users.indexOf(this.get(p_id)), 1);
    }
    
    public get(p_id:number):AnnounceVO
    {
        let users:AnnounceVO[] = this.getAll();
        let i:number = users.length;

        while( --i > -1 )
        {
            if( users[i].id === p_id )
                return users[i];
        }
    }

    public getAll():AnnounceVO[]{
        return [];
    }
}