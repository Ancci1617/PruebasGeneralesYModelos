import { Credito } from "./classes/credito.js";
import { Ficha } from "./classes/ficha.js";
import { Prestamo } from "./classes/prestamo.js";
import { creditParameters } from "./types/dbCreditType.js";

export  class CreditosFactory{
    static InstanceCredits(data : Array<creditParameters>) : Array<Credito>{

        return data.map(creditData => {
            if(creditData.NUMERO < 50000) return new Ficha(creditData);
            return new Prestamo(creditData)
        })




    }
}

