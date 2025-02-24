import { DistribucionDePago } from "../../Pago/domain/value-object/DistribucionDePago";
import { DistribucionPorCuota } from "../../Pago/domain/value-object/DistribucionPorCuota";
import { PagoAlCredito } from "./PagoAlCredito";



export class Credito{
    

    constructor(
        private cte : number,
        private ficha : number,
        
        private creditoId : number,
        
        private total : number,
        private cuota : number,
        private saldo : number,

        /*Esta referencia no debe ser modificada, solo leida pues es otro aggregate. */
        private pagos : PagoAlCredito[]


    ){

    }
    getCreditoId(){
        return this.creditoId
    }


    //Simula el calculño de deuda que es un calculo tardado que debe tardar 2 segundos
    calcularDeuda(){
        const buffer = new SharedArrayBuffer(4);
        const view = new Int32Array(buffer);
        Atomics.wait(view, 0, 0, 2000);
    }


    cobrar(monto : number) : DistribucionDePago {
        
        const distribucion = new DistribucionDePago(
            monto,
            new DistribucionPorCuota([])
        );

        return distribucion;
    }
    pasarPago(pagoAlCredito : PagoAlCredito){
        this.saldo -= pagoAlCredito.enCuota();

        return this.pagos.push(pagoAlCredito);
    }

}