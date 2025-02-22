

export interface UnitOfWork{

    commit(): Promise<void>;
    rollback(): Promise<void>;
    beginTransaction(): Promise<void>;

}


