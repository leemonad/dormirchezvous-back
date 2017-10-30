import { AnnounceVO } from "./vo/AnnounceVO";
import { Database } from './Database';

export class AnnounceModel {

    private static _instance: AnnounceModel;
    public static getInstance(): AnnounceModel {
        AnnounceModel._instance = AnnounceModel._instance || new AnnounceModel();
        return AnnounceModel._instance;
    }

    constructor() { }

    // do some update stuff
    public update(p_vo: AnnounceVO): void 
    {
        Database.getInstance().query(
            "UPDATE announces SET description=?, event_id=?, num_places=?, user_id=? WHERE id=?",
            [
                p_vo.description,
                p_vo.event_id,
                p_vo.num_places,
                p_vo.user_id, 
                p_vo.id
            ]
        );
    }

    public add(p_vo: AnnounceVO): void 
    {
        Database.getInstance().query(
            "INSERT INTO announces (description, event_id, num_places, user_id) VALUES(?, ?, ?, ?)",
            [
                p_vo.description,
                p_vo.event_id,
                p_vo.num_places,
                p_vo.user_id
            ]
        );
    }

    public remove(p_id: number): void 
    {
        Database.getInstance().query(
            "DELETE FROM announces WHERE id=?", [p_id]
        );
    }

    public get(p_id: number): Promise<AnnounceVO> 
    {
        return Database.getInstance().query("SELECT * FROM announces WHERE id=?", [p_id]).then(
                (rows: Array<any>) => {
                    return rows[0] as AnnounceVO;
                }
        );
    }

    public getAll(): Promise<AnnounceVO[]> 
    {
        return Database.getInstance().query("SELECT * FROM announces", []).then(

            (rows: Array<any>) => {

                const results: AnnounceVO[] = new Array<AnnounceVO>();
                const max: number = rows.length;
                let vo: AnnounceVO = null;
                let i: number = 0;

                for (i = 0; i < max; i++) {
                    vo = rows[i] as AnnounceVO;
                    results.push(vo);
                }

                return results;
            }

        );
    }
}