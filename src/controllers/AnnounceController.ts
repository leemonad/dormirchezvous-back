import { AbstractController } from "./AbstractController";
import { AnnounceModel } from "../model/AnnounceModel";
import { AnnounceVO } from "../model/vo/AnnounceVO";
import {Session} from "../model/Session";
import {MYSQL_ERROR, ONLY_ONE_ANNOUNCE} from "../config/app.constants";

export class AnnounceController extends AbstractController {

    static create(session:Session, req: any, res: any): AnnounceController {
        return new AnnounceController(session, req, res);
    }

    constructor(session:Session, req: any, res: any) {
        super(session, req, res);
    }

    public put(): void {  

        const vo: AnnounceVO    = new AnnounceVO();
        const params: any       = this.getUserParams();
        const input: any        = this.getUserInput();

        vo.populate(input);
        vo.id = parseInt(params.id);
        // on force le user_id puisqu'un utilisateur n'a pas 
        // le droit de manipuler des infos autres que les siennes
        vo.user_id = this._session.getUserId();

        AnnounceModel.getInstance().update(vo).then(
            (results:any) => {
                this.setOutput(results);
                this.send();
            }
        ).catch(this._mysqlErrorHandler);
    }

    public post(): void {
        const vo: AnnounceVO    = new AnnounceVO();
        const input: any        = this.getUserInput();

        vo.populate(input);
        // on force le user_id puisqu'un utilisateur n'a pas 
        // le droit de manipuler des infos autres que les siennes
        vo.user_id = this._session.getUserId();

        AnnounceModel.getInstance().getUserAnnounceByEventId(vo.user_id, vo.event_id).then(
            (results:AnnounceVO) => {
                if( !results ){
                    console.log(results);
                    AnnounceModel.getInstance().add(vo).then(
                        (results:any) => {
                            this.setOutput(results);
                            this.send();
                        }
                    ).catch(this._mysqlErrorHandler);
                }
                else{
                    this.setOutput(ONLY_ONE_ANNOUNCE)
                    this.send();
                }
            }
        ).catch(this._mysqlErrorHandler);

        
    }

    public get(): void {
        const params: any = this.getUserParams();
        const id:number = parseInt(params.id);
        this.setOutput([]);

        if (!isNaN(id)) {
            AnnounceModel.getInstance().get(id).then(
                (row: AnnounceVO) => {
                    this.setOutput([row]);
                    this.send();
                }
            ).catch(this._mysqlErrorHandler);
        }
        else {
            AnnounceModel.getInstance().getAll().then(
                (rows: AnnounceVO[]) => {
                    this.setOutput(rows);
                    this.send();
                }
            ).catch(this._mysqlErrorHandler);
        }
    }

    public delete(): void {

        const params:any = this.getUserParams();
        
        AnnounceModel.getInstance().remove(parseInt(params.id)).then(
            (results:any) => {
                this.setOutput(results); 
                this.send();
            }
        ).catch(this._mysqlErrorHandler);
    }

}