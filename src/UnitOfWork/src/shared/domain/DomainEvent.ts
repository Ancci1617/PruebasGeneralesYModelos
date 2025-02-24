
export abstract class DomainEvent{

    abstract eventName : string;
    

    abstract payload() : any
    
}

export type DomainEventClass = {
    eventName : string

}