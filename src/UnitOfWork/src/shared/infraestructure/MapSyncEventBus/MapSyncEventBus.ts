import { DomainEvent } from "../../domain/DomainEvent";
import { DomainEventSubscriber } from "../../domain/DomainEventSubscriber";
import { SyncEventBus } from "../../domain/interfaces/SyncEventBus";

export class MapSyncEventBus implements SyncEventBus{
    publish(event: DomainEvent[]): Promise<void> {
        throw new Error("Method not implemented.");
    }
    subscribe(subscriber: DomainEventSubscriber<DomainEvent>): Promise<void> {
        throw new Error("Method not implemented.");
    }



}