import { CodigoDePago } from "../../Pago/domain/value-object/CodigoDePago";
import { DistribucionDePago } from "../../Pago/domain/value-object/DistribucionDePago";

export class PagoAlCredito{


    constructor(
        private distribucion : DistribucionDePago,
        private codigo : CodigoDePago
    ){
        
    }

    enCuota(){
        return this.distribucion.enCuota();
    }

}