import * as xss from "xss";

export class EventVO{

    constructor(){}

    public id:number            = 0;
    public locked:boolean       = false;
    public name:string          = null;    

    public populate(input:any):void{
        const id:number         = parseInt(input.id);
        const locked:boolean    = input.locked as boolean;
        const name:string       = xss(input.name);

        this.id     = (isNaN(id)) ? -1 : id;
        this.locked = locked;
        this.name   = name;
    }
}