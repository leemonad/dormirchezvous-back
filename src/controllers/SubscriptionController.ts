import { AbstractController } from "./AbstractController";
import { SubscriptionModel } from "../model/SubscriptionModel";
import { SubscriptionVO } from "../model/vo/SubscriptionVO";
import {MYSQL_ERROR} from "../config/app.constants";

export class SubscriptionController extends AbstractController {

    static create(req: any, res: any): SubscriptionController {
        return new SubscriptionController(req, res);
    }

    constructor(req: any, res: any) {
        super(req, res);
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
        ).catch(
            (error:any) => {
                this.setOutput(MYSQL_ERROR);
                this.send();
            }
        );
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
            SubscriptionModel.getInstance().get(id).then(
                (row: SubscriptionVO) => {
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
            SubscriptionModel.getInstance().getAll().then(
                (rows: SubscriptionVO[]) => {
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
        
        SubscriptionModel.getInstance().remove(parseInt(params.id)).then(
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