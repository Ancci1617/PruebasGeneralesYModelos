
import {createPool,PoolConnection} from "mysql2/promise";
import {UnitOfWork,UnitOfWork_INJECTION_TOKEN} from "../../domain/interfaces/UnitOfWork";
import { container } from "tsyringe";
import { AsyncLocalStorageUnitOfWork } from "../AsyncLocalStorageUnitOfWork/AsyncLocalStorageUnitOfWork";
export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password : '123',
    port:3306,
    database: 'bgm_db',
})
export class MysqlRepository {  

    private unitOfWork = container.resolve<AsyncLocalStorageUnitOfWork>(UnitOfWork_INJECTION_TOKEN);

    protected async connection() : Promise<PoolConnection>{
        if(this.unitOfWork.isInTransaction()){
            return this.unitOfWork.getConnection();
        }

        return await pool.getConnection();
    }


}