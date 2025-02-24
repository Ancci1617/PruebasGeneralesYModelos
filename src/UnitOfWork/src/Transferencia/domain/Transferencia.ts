import { Pago } from "../../Pago/domain/Pago";

export class Transferencia{


    constructor(
        private montoAsociado : number,
        private numeroDeOperacion : number,
        private fechaDeOperacion : Date,
        private monto : number,
    ){

    }

    montoSinPagosAsociados(){
        return this.monto - this.montoAsociado
    }

    puedeAsociarElMonto(monto : number) : boolean{
        return this.montoAsociado + monto <= this.monto
    }

    asociarPago(pago : Pago){
        this.monto -= pago.total();
    }

    getNumeroDeOperacion(){
        return this.numeroDeOperacion
    }

}