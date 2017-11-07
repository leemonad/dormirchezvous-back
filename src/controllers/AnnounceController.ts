import { AbstractController } from "./AbstractController";
import { AnnounceModel } from "../model/AnnounceModel";
import { AnnounceVO } from "../model/vo/AnnounceVO";
import {MYSQL_ERROR} from "../config/app.constants";

export class AnnounceController extends AbstractController {

    static create(req: any, res: any): AnnounceController {
        return new AnnounceController(req, res);
    }

    constructor(req: any, res: any) {
        super(req, res);
    }

    public put(): void {    

        const vo: AnnounceVO    = new AnnounceVO();
        const params: any       = this.getUserParams();
        const input: any        = this.getUserInput();

        vo.populate(input);
        vo.id = parseInt(params.id);

        AnnounceModel.getInstance().update(vo).then(
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
        const vo: AnnounceVO = new AnnounceVO();
        const input: any = this.getUserInput();

        vo.populate(input);

        AnnounceModel.getInstance().add(vo).then(
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
            AnnounceModel.getInstance().get(id).then(
                (row: AnnounceVO) => {
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
            AnnounceModel.getInstance().getAll().then(
                (rows: AnnounceVO[]) => {
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
        
        AnnounceModel.getInstance().remove(parseInt(params.id)).then(
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