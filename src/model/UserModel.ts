import { UserVO } from "./vo/UserVO";
import { Database } from './Database';

export class UserModel {

    private static _instance: UserModel;
    public static getInstance(): UserModel {
        UserModel._instance = UserModel._instance || new UserModel();
        return UserModel._instance;
    }

    constructor() { }

    // do some update stuff
    public update(p_vo: UserVO): void 
    {
        Database.getInstance().query(
            "UPDATE users SET address=?, city=?, name=?, surname=?, phone=?, zipcode=? WHERE id=?",
            [
                p_vo.address,
                p_vo.city,
                p_vo.name,
                p_vo.surname,
                p_vo.phone,
                p_vo.zipcode,
                p_vo.id
            ]
        );
    }

    public add(p_vo: UserVO): void 
    {
        Database.getInstance().query(
            "INSERT INTO users (address, city, name, surname, phone, zipcode) VALUES(?, ?, ?, ?, ?, ?)",
            [
                p_vo.address,
                p_vo.city,
                p_vo.name,
                p_vo.surname,
                p_vo.phone,
                p_vo.zipcode
            ]
        );
    }

    public remove(p_id: number): void 
    {
        Database.getInstance().query(
            "DELETE FROM users WHERE id=?", [p_id]
        );
    }

    public get(p_id: number): Promise<UserVO> 
    {
        return Database.getInstance().query("SELECT * FROM users WHERE id=?", [p_id]).then(
                (rows: Array<any>) => {
                    return rows[0] as UserVO;
                }
        );
    }

    public getAll(): Promise<UserVO[]> 
    {
        return Database.getInstance().query("SELECT * FROM users", []).then(

            (rows: Array<any>) => {

                const results: UserVO[] = new Array<UserVO>();
                const max: number = rows.length;
                let vo: UserVO = null;
                let i: number = 0;

                for (i = 0; i < max; i++) {
                    vo = rows[i] as UserVO;
                    results.push(vo);
                }

                return results;
            }

        );
    }
}