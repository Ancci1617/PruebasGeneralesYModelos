import { DistribucionPorCuota } from "./DistribucionPorCuota";


export class DistribucionDePago{

    constructor(

        private cuota : number,
        private servicios : DistribucionPorCuota
    ){}

    enCuota(){
        return this.cuota;
    }
    enServicio(){
        return this.servicios;
    }
    total(){
        return this.cuota + this.servicios.total();
    }
    toPrimitives(){
        return {
            cuota : this.cuota,
            servicios : this.servicios.toPrimitives()
        }
    }


}

