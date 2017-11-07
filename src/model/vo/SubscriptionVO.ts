import * as xss from "xss";

export class SubscriptionVO {

    constructor() { }

    public id: number           = 0;
    public announce_id: number  = 0;
    public approved: boolean    = true;
    public msg: string          = null;

    public populate(input: any): void {
        const id: number            = parseInt(input.id);
        const announce_id: number   = parseInt(input.announce_id);
        const approved: boolean     = ( input.approved === true );
        const msg: string           = xss(input.msg);

        this.id             = (isNaN(id)) ? -1 : id;
        this.announce_id    = (isNaN(announce_id)) ? -1 : announce_id;
        this.approved       = approved;
        this.msg            = msg;
    }
}