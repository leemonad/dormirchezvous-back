import { AbstractController } from "./AbstractController";
import { EventModel } from "../model/EventModel";
import { EventVO } from "../model/vo/EventVO";
import {MYSQL_ERROR} from "../config/app.constants";

export class EventController extends AbstractController {

    static create(req: any, res: any): EventController {
        return new EventController(req, res);
    }

    constructor(req: any, res: any) {
        super(req, res);
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
        ).catch(
            (error:any) => {
                this.setOutput(MYSQL_ERROR);
                this.send();
            }
        );
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
        ).catch(
            (error:any) => {
                this.setOutput(MYSQL_ERROR);
                this.send();
            }
        );
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
            ).catch(
                (error:any) => {
                    this.setOutput(MYSQL_ERROR);
                    this.send();
                }
            );
        }
        else {
            EventModel.getInstance().getAll().then(
                (rows: EventVO[]) => {
                    this.setOutput(rows);
                    this.send();
                }
            ).catch(
                (error:any) => {
                    this.setOutput(MYSQL_ERROR);
                    this.send();
                }
            );
        }
    }

    public delete(): void {

        const params:any = this.getUserParams();
        
        EventModel.getInstance().remove(parseInt(params.id)).then(
            (results:any) => {
                this.setOutput(results); 
                this.send();
            }
        ).catch(
            (error:any) => {
                this.setOutput(MYSQL_ERROR);
                this.send();
            }
        );
    }

}