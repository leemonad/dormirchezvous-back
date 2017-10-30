import { SubscriptionVO } from "./vo/SubscriptionVO";
import { Database } from './Database';

export class SubscriptionModel {

    private static _instance: SubscriptionModel;
    public static getInstance(): SubscriptionModel {
        SubscriptionModel._instance = SubscriptionModel._instance || new SubscriptionModel();
        return SubscriptionModel._instance;
    }

    constructor() { }

    // do some update stuff
    public update(p_vo: SubscriptionVO): void 
    {
        Database.getInstance().query(
            "UPDATE subscriptions SET announce_id=?, approved=?, msg=? WHERE id=?",
            [
                p_vo.announce_id,
                p_vo.approved,
                p_vo.msg,
                p_vo.id
            ]
        );
    }

    public add(p_vo: SubscriptionVO): void 
    {
        Database.getInstance().query(
            "INSERT INTO subscriptions (announce_id, approved, msg) VALUES(?, ?, ?)",
            [
                p_vo.announce_id,
                p_vo.approved,
                p_vo.msg,
            ]
        );
    }

    public remove(p_id: number): void 
    {
        Database.getInstance().query(
            "DELETE FROM subscriptions WHERE id=?", [p_id]
        );
    }

    public get(p_id: number): Promise<SubscriptionVO> 
    {
        return Database.getInstance().query("SELECT * FROM subscriptions WHERE id=?", [p_id]).then(
                (rows: Array<any>) => {
                    return rows[0] as SubscriptionVO;
                }
        );
    }

    public getAll(): Promise<SubscriptionVO[]> 
    {
        return Database.getInstance().query("SELECT * FROM subscriptions", []).then(

            (rows: Array<any>) => {

                const results: SubscriptionVO[] = new Array<SubscriptionVO>();
                const max: number = rows.length;
                let vo: SubscriptionVO = null;
                let i: number = 0;

                for (i = 0; i < max; i++) {
                    vo = rows[i] as SubscriptionVO;
                    results.push(vo);
                }

                return results;
            }

        );
    }
}