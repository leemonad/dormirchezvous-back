import * as xss from "xss";

export class AnnounceVO{

    constructor(){}

    public id:number            = 0;
    public user_id:number       = 0;
    public event_id:number      = 0;
    public num_places:number    = 0;
    public description:string   = null;    

    public populate(input:any):void{
        const id:number           = parseInt(input.id);
        const user_id:number      = parseInt(input.user_id);
        const event_id:number     = parseInt(input.event_id);
        const num_places:number   = parseInt(input.num_places);
        const description:string  = xss(input.description);

        this.id             = (isNaN(id))           ? -1 : id;
        this.user_id        = (isNaN(user_id))      ? -1 : user_id;
        this.event_id       = (isNaN(event_id))     ? -1 : event_id;
        this.num_places     = (isNaN(num_places))   ? -1 : num_places;
        this.description    = description;
    }
    
}