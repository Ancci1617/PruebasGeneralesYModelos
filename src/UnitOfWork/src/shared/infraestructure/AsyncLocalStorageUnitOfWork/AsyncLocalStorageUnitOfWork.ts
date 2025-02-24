import { UnitOfWork } from "../../domain/interfaces/UnitOfWork";
import {AsyncLocalStorage} from "async_hooks"
import {PoolConnection} from "mysql2/promise";
import {pool} from "../MysqlRepository/MysqlRepository";


class NotUsingUnitOfWorkError extends Error {
    constructor(){
        super("UnitOfWork se intento ejecutar sin inizializarse la conexion.")
    }
}

export class AsyncLocalStorageUnitOfWork extends AsyncLocalStorage<PoolConnection> implements UnitOfWork{
    constructor(){
        super();
        console.log("constructed AsyncLocalStorageUnitOfWork")
    }

    async beginTransaction(callback : () => unknown){

        if(this.isInTransaction()){
            throw new Error("No se puede iniciar una transaccion dentro de una transaccion");
        }

        const connection = await pool.getConnection();
        await connection.beginTransaction();

        this.run(connection,callback);
    }
    getConnection(): PoolConnection{
        const storeValue = super.getStore();
        if(!storeValue)
            throw new NotUsingUnitOfWorkError();
        return storeValue;
    }
    
    isInTransaction(): boolean {
        return Boolean(this.getStore());    
    }
    
    async commit(): Promise<void> {
        const connection = this.getConnection();

        await connection.commit();
    }
    async rollback(): Promise<void> {
        const connection = this.getConnection();
        await connection.rollback();
    }

}
