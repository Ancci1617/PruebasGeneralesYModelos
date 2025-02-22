import { UnitOfWork } from "../../domain/interfaces/UnitOfWork";
import {AsyncLocalStorage} from "async_hooks"

export class AsyncLocalStorageUnitOfWork implements UnitOfWork{
    
    private asyncLocalStorage = new AsyncLocalStorage<Map<string,>>();

    async beginTransaction(): Promise<void> {
        return;
    }

    async commit(): Promise<void> {
        return;
    }
    async rollback(): Promise<void> {
        return;
    }

}
