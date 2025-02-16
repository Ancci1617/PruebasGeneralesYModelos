import { BackLogItem } from "./shared/BackLogItem";
import { BackLogItemCommited } from "./shared/BackLogItemCommited";
import { DomainEvent, DomainEventClass, DomainEventSubscriber } from "./shared/DomainEvents";
import { InMemoryEventBus } from "./shared/InMemoryEventBus";

const eventBus = new InMemoryEventBus();
class MyApplicationService{

    constructor(){}

    async run(){
        const subscriber = new class extends DomainEventSubscriber<DomainEvent>{
            public subscribedToEventType() : DomainEventClass{
                return BackLogItemCommited;
            }   

            //@ts-ignore
            public handleEvent(event : DomainEvent) : void{
                console.log("handleEvent")
                setTimeout(() => {
                    console.log("Event handled BackLogItemCommited on anonimus class");
                    console.log(event);
                },5000)
            }
        };
        eventBus.subscribe(subscriber);

        //TODO
        const backLogItem = new BackLogItem();
        backLogItem.commit();
        const event = backLogItem.pullEvent()
        eventBus.publish(event);
    }
}


const service = new MyApplicationService();
service.run();