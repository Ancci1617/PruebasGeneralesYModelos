import { DomainEvent } from "../../shared/domain/DomainEvent";
import { Pago } from "./Pago";

export class PagoCargado extends DomainEvent{
    static eventName: string = "pago.cargado";
    eventName: string = PagoCargado.eventName;

    constructor(
        private pago : Pago
    ){
        super();
    }

    payload() {
        return this.pago.toPrimitives();
    }

}