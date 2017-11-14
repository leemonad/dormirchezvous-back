import { AbstractController } from "./AbstractController";
import { EventModel } from "../model/EventModel";
import { EventVO } from "../model/vo/EventVO";
import {MYSQL_ERROR} from "../config/app.constants";
import {Session} from "../model/Session";

export class EventController extends AbstractController {

    static create(session:Session, req: any, res: any): EventController {
        return new EventController(session, req, res);
    }

    constructor(session:Session, req: any, res: any) {
        super(session, req, res);
    }

    public put(): void {    

        const vo: EventVO    = new EventVO();
        const params: any       = this.getUserParams();
        const input: any        = this.getUserInput();

        vo.populate(input);
        vo.id = parseInt(params.id);

        EventModel.getInstance().update(vo).then(
            (results:any) => {
                this.setOutput(results);
                this.send();
            }
        ).catch(this._mysqlErrorHandler);
    }

    public post(): void {
        const vo: EventVO = new EventVO();
        const input: any = this.getUserInput();

        vo.populate(input);

        EventModel.getInstance().add(vo).then(
            (results:any) => {
                this.setOutput(results);
                this.send();
            }
        ).catch(this._mysqlErrorHandler);
    }

    public get(): void {
        const params: any = this.getUserParams();
        const id:number = parseInt(params.id);
        this.setOutput([]);

        if (!isNaN(id)) {
            EventModel.getInstance().get(id).then(
                (row: EventVO) => {
                    this.setOutput([row]);
                    this.send();
                }
            ).catch(this._mysqlErrorHandler);
        }
        else {
            EventModel.getInstance().getAll().then(
                (rows: EventVO[]) => {
                    this.setOutput(rows);
                    this.send();
                }
            ).catch(this._mysqlErrorHandler );
        }
    }

    public delete(): void {

        const params:any = this.getUserParams();
        
        EventModel.getInstance().remove(parseInt(params.id)).then(
            (results:any) => {
                this.setOutput(results); 
                this.send();
            }
        ).catch(this._mysqlErrorHandler);
    }

}