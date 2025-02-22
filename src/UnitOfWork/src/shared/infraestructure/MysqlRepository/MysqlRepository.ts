
import {createPool} from "mysql2/promise";
const pool = createPool({
    host: 'localhost',
    user: 'root',
    password : '123',
    port:3306,
    database: 'bgm_db',
})
export class MysqlRepository {  

    protected getConnection(){
        return pool.getConnection();
    }


}