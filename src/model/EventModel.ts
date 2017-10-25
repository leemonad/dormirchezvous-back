import {EventVO} from "./vo/EventVO";

export class EventModel{

    private static _instance:EventModel;
    public static getInstance():EventModel
    {
        EventModel._instance = EventModel._instance || new EventModel();
        return EventModel._instance;
    }
    
    constructor(){}

    // do some update stuff
    public update():void{}

    public add(p_vo:EventVO):void
    {
        this.getAll().push(p_vo);
    }

    public remove(p_id:number):void
    {
        let users:EventVO[] = this.getAll();
        users.splice(users.indexOf(this.get(p_id)), 1);
    }
    
    public get(p_id:number):EventVO
    {
        let users:EventVO[] = this.getAll();
        let i:number = users.length;

        while( --i > -1 )
        {
            if( users[i].id === p_id )
                return users[i];
        }
    }

    public getAll():EventVO[]{
        return [];
    }
}