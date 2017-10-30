import * as mysql from 'mysql';
import {MYSQL_CONFIG} from '../config/config';

export class Database{

    private static _instance:Database = null;

    public static getInstance():Database{
        
        if( Database._instance === null )
            Database._instance = new Database();

        return Database._instance;
    }


    private _pool:mysql.Pool;

    constructor(){

        this._pool = mysql.createPool(MYSQL_CONFIG);
    }


    public query(p_sql:string, p_values:Array<any>):Promise<Array<any>>
    {
        return new Promise<Array<any>>(

            (resolve, reject) => {


                this._pool.getConnection(
                    
                    ( error:mysql.MysqlError, connection:mysql.PoolConnection) => {
        
                        connection.query( 
                            p_sql, 
                            p_values,

                            (error:mysql.MysqlError, results:Array<any>, fields:mysql.FieldInfo[]) => {
                                if( error ) 
                                {
                                    reject(error);
                                }
                                else
                                {
                                    resolve(results);
                                }
                                    
                                connection.release();
                            }
                        );
        
                    }
                );

            }

        );
        
       
    }

}