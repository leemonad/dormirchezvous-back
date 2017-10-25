import {UserVO} from "./vo/UserVO";

export class UserModel{

    private static _instance:UserModel;
    public static getInstance():UserModel
    {
        UserModel._instance = UserModel._instance || new UserModel();
        return UserModel._instance;
    }
    
    constructor(){}

    // do some update stuff
    public update():void{}

    public add(p_vo:UserVO):void
    {
        this.getAll().push(p_vo);
    }

    public remove(p_id:number):void
    {
        let users:UserVO[] = this.getAll();
        users.splice(users.indexOf(this.get(p_id)), 1);
    }
    
    public get(p_id:number):UserVO
    {
        let users:UserVO[] = this.getAll();
        let i:number = users.length;

        while( --i > -1 )
        {
            if( users[i].id === p_id )
                return users[i];
        }
    }

    public getAll():UserVO[]{
        return [];
    }
}