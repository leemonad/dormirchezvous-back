import { EventVO } from "./vo/EventVO";
import { Database } from './Database';

export class EventModel {

    private static _instance: EventModel;
    public static getInstance(): EventModel {
        EventModel._instance = EventModel._instance || new EventModel();
        return EventModel._instance;
    }

    constructor() { }

    // do some update stuff
    public update(p_vo: EventVO): void 
    {
        Database.getInstance().query(
            "UPDATE events SET locked=?, name=? WHERE id=?",
            [
                p_vo.locked,
                p_vo.name,
                p_vo.id
            ]
        );
    }

    public add(p_vo: EventVO): void 
    {
        Database.getInstance().query(
            "INSERT INTO events (locked, name) VALUES(?, ?)",
            [
                p_vo.locked,
                p_vo.name
            ]
        );
    }

    public remove(p_id: number): void 
    {
        Database.getInstance().query(
            "DELETE FROM events WHERE id=?", [p_id]
        );
    }

    public get(p_id: number): Promise<EventVO> 
    {
        return Database.getInstance().query("SELECT * FROM events WHERE id=?", [p_id]).then(
                (rows: Array<any>) => {
                    return rows[0] as EventVO;
                }
        );
    }

    public getAll(): Promise<EventVO[]> 
    {
        return Database.getInstance().query("SELECT * FROM events", []).then(

            (rows: Array<any>) => {

                const results: EventVO[] = new Array<EventVO>();
                const max: number = rows.length;
                let vo: EventVO = null;
                let i: number = 0;

                for (i = 0; i < max; i++) {
                    vo = rows[i] as EventVO;
                    results.push(vo);
                }

                return results;
            }

        );
    }
}