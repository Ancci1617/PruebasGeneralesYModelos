/*TODO : El monto total de un pago se distribuye entre servicio,mora y cuota */

import { DistribucionDePago } from "./value-object/DistribucionDePago";
import { Transferencia } from "../../Transferencia/domain/Transferencia";
import { CodigoDePago } from "./value-object/CodigoDePago";


export class Pago{

    constructor(
        private distribucion : DistribucionDePago,
        private creditoId : number,
        private numeroDeTransferencia : number | null,
        private codigoDePago : CodigoDePago
    ){}

    total(){
        return this.distribucion.total()
    }
    
    toPrimitives(){
        return {
            distribucion : this.distribucion.toPrimitives(),
            creditoId : this.creditoId,
            numeroDeTransferencia : this.numeroDeTransferencia,
            codigoDePago : this.codigoDePago.getValue()
        }
    }
    static create(
        params : {
            creditoId : number,
            distribucion : DistribucionDePago,
            numeroDeTransferencia : number | null
        }
    ){
        const codigo = CodigoDePago.create();
        return new Pago(
            params.distribucion,
            params.creditoId,
            params.numeroDeTransferencia,
            codigo
        );
    }

}