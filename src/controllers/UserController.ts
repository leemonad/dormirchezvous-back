import { AbstractController } from "./AbstractController";
import { UserModel } from "../model/UserModel";
import { UserVO } from "../model/vo/UserVO";
import {MYSQL_ERROR} from "../config/app.constants";
import {Session} from "../model/Session";

export class UserController extends AbstractController {

    static create(session:Session, req: any, res: any): UserController {
        return new UserController(session, req, res);
    }

    constructor(session:Session, req: any, res: any) {
        super(session, req, res);
    }

    public put(): void {    

        const vo: UserVO    = new UserVO();
        const params: any   = this.getUserParams();
        const input: any    = this.getUserInput();

        vo.populate(input);
        vo.id = parseInt(params.id);

        UserModel.getInstance().update(vo).then(
            (results:any) => {
                this.setOutput(results);
                this.send();
            }
        ).catch(this._mysqlErrorHandler);
    }

    public post(): void {
        const vo: UserVO = new UserVO();
        const input: any = this.getUserInput();

        vo.populate(input);

        UserModel.getInstance().add(vo).then(
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
            UserModel.getInstance().get(id).then(
                (row: UserVO) => {
                    this.setOutput([row]);
                    this.send();
                }
            ).catch(this._mysqlErrorHandler);
        }
        else {
            UserModel.getInstance().getAll().then(
                (rows: UserVO[]) => {
                    this.setOutput(rows);
                    this.send();
                }
            ).catch(this._mysqlErrorHandler);
        }
    }

    public delete(): void {

        const params:any = this.getUserParams();
        
        UserModel.getInstance().remove(parseInt(params.id)).then(
            (results:any) => {
                this.setOutput(results); 
                this.send();
            }
        ).catch(this._mysqlErrorHandler);
    }

}