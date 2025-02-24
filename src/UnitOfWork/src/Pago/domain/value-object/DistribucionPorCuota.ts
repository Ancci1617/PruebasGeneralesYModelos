export class DistribucionPorCuota {

    constructor(
        private distribucion : {
            cuotaId : number,
            monto : number
        }[]
    ){

    }

    total(){
        return this.distribucion.reduce((total, cuota) => total + cuota.monto, 0);
    }
    toPrimitives(){
        return this.distribucion
    }
}