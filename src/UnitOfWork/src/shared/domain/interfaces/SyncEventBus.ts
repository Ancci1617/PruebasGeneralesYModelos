import { DomainEvent } from "../DomainEvent";
import { DomainEventSubscriber } from "../DomainEventSubscriber";

export interface SyncEventBus {

    publish(event : DomainEvent[]) : Promise<void>

    subscribe(subscriber : DomainEventSubscriber<DomainEvent>) : Promise<void>;

}