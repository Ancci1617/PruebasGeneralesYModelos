import { creditParameters } from "src/types/dbCreditType.js";

export  abstract class Credito{
    NUMERO: number;
    CTE: number;
    ART: string;
    PAGADO: number;
    CUOTA: number;
    constructor(data : creditParameters){
        this.NUMERO = data.NUMERO;
        this.CTE = data.CTE;
        this.ART = data.ART;
        this.PAGADO = data.PAGADO;
        this.CUOTA = data.CUOTA;
    }
    abstract getPagas() : number;

    getVigente() : string{
        return "El vencimiento vigente para las cuotas pagas es " + this.getPagas();
    }

}