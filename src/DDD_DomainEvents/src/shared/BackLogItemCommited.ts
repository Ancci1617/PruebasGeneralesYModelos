import { DomainEvent } from "./DomainEvents";

export class BackLogItemCommited implements DomainEvent {
    static eventName : string = "backlog.item.commited"
    eventName: string = BackLogItemCommited.eventName;
    constructor(
        private fechaDeOcurrencia : Date
    ){
    }

    getFechaDeOcurrencia(): Date {
        return this.fechaDeOcurrencia;
    }
}