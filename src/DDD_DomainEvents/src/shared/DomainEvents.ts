export interface DomainEvent{
    eventName : string
    getFechaDeOcurrencia() : Date
}
export type DomainEventClass = {
    eventName : string
};

export abstract class DomainEventSubscriber<T extends DomainEvent>{

    public abstract handleEvent(event : T) : void;

    public abstract subscribedToEventType() : DomainEventClass
    
}