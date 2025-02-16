import EventEmitter from "events";
import { DomainEvent, DomainEventSubscriber } from "./DomainEvents";

export class InMemoryEventBus extends EventEmitter{



    publish(event: DomainEvent): void {
        console.log("Publicando evento ",event.eventName, event)
        this.emit(event.eventName, event);
    }

    subscribe(subscriber : DomainEventSubscriber<DomainEvent>){
        this.on(
            subscriber.subscribedToEventType().eventName,
            subscriber.handleEvent.bind(subscriber)
        );
    }

}