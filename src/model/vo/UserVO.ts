import * as xss from "xss";

export class UserVO{

    constructor(){}

    public id:number        = 0;
    public city:string      = null;
    public zipcode:string   = null;
    public phone:string     = null;
    public name:string      = null;
    public surname:string   = null;
    public address:string   = null;


    public populate(input:any):void{
        const id:number = parseInt(input.id);

        this.id         = (isNaN(id)) ? -1 : id;
        this.city       = xss(input.city);
        this.zipcode    = xss(input.zipcode);
        this.phone      = xss(input.phone);
        this.name       = xss(input.name);
        this.surname    = xss(input.surname);
        this.address    = xss(input.address);
    }
}