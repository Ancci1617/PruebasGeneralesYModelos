import { DomainEvent, DomainEventClass } from "./DomainEvent";

export interface DomainEventSubscriber<T extends DomainEvent>{


    listeningTo() : DomainEventClass;

    on(event : T) : Promise<void>;


}