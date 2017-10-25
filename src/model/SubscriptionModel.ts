import {SubscriptionVO} from "./vo/SubscriptionVO";

export class SubscriptionModel{

    private static _instance:SubscriptionModel;
    public static getInstance():SubscriptionModel
    {
        SubscriptionModel._instance = SubscriptionModel._instance || new SubscriptionModel();
        return SubscriptionModel._instance;
    }
    
    constructor(){}

    // do some update stuff
    public update():void{}

    public add(p_vo:SubscriptionVO):void
    {
        this.getAll().push(p_vo);
    }

    public remove(p_id:number):void
    {
        let users:SubscriptionVO[] = this.getAll();
        users.splice(users.indexOf(this.get(p_id)), 1);
    }
    
    public get(p_id:number):SubscriptionVO
    {
        let users:SubscriptionVO[] = this.getAll();
        let i:number = users.length;

        while( --i > -1 )
        {
            if( users[i].id === p_id )
                return users[i];
        }
    }

    public getAll():SubscriptionVO[]{
        return [];
    }
}