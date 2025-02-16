import { InvalidArgumentError } from "../error/InvalidArgumentError";

export class MontoDePago{

    constructor(
        private value : number
    ){
        this.ensureIsMontoDePago(value);
    }

    ensureIsMontoDePago(value : number){
        if(typeof value !== "number" || Number.isNaN(value)) throw new InvalidArgumentError("El monto de pago debe ser un numero");

        if(value <= 0) throw new InvalidArgumentError("El monto de pago debe ser mayor a 0");
    }

}