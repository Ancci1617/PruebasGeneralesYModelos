
import { creditParameters } from "../types/dbCreditType.js";
import { Credito } from "./credito.js";

export class Ficha extends Credito {

  constructor(data: creditParameters) {
    super(data);
  }
  
  getPagas(): number {
    return (this.PAGADO * 1.1) / this.CUOTA;
  }
  
}
