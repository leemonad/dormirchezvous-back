import { AbstractController } from "./AbstractController";
import { SubscriptionModel } from "../model/SubscriptionModel";
import { SubscriptionVO } from "../model/vo/SubscriptionVO";
import {MYSQL_ERROR} from "../config/app.constants";
import {Session} from "../model/Session";

export class SubscriptionController extends AbstractController {

    static create(session:Session, req: any, res: any): SubscriptionController {
        return new SubscriptionController(session, req, res);
    }

    constructor(session:Session, req: any, res: any) {
        super(session, req, res);
    }

    public put(): void {    

        const vo: SubscriptionVO    = new SubscriptionVO();
        const params: any           = this.getUserParams();
        const input: any            = this.getUserInput();

        vo.populate(input);
        vo.id = parseInt(params.id);

        SubscriptionModel.getInstance().update(vo).then(
            (results:any) => {
                this.setOutput(results);
                this.send();
            }
        ).catch(this._mysqlErrorHandler);
    }

    public post(): void {
        const vo: SubscriptionVO = new SubscriptionVO();
        const input: any = this.getUserInput();

        vo.populate(input);

        SubscriptionModel.getInstance().add(vo).then(
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
            SubscriptionModel.getInstance().get(id).then(
                (row: SubscriptionVO) => {
                    this.setOutput([row]);
                    this.send();
                }
            ).catch(this._mysqlErrorHandler);
        }
        else {
            SubscriptionModel.getInstance().getAll().then(
                (rows: SubscriptionVO[]) => {
                    this.setOutput(rows);
                    this.send();
                }
            ).catch(this._mysqlErrorHandler);
        }
    }

    public delete(): void {

        const params:any = this.getUserParams();
        
        SubscriptionModel.getInstance().remove(parseInt(params.id)).then(
            (results:any) => {
                this.setOutput(results); 
                this.send();
            }
        ).catch(this._mysqlErrorHandler);
    }

}