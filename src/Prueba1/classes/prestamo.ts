import { creditParameters } from "../types/dbCreditType.js";
import { Credito } from "./credito.js";

export class Prestamo extends Credito {
  constructor(data: creditParameters) {
    super(data);
  }

  getPagas(): number {
    const pagas = this.PAGADO / this.CUOTA
    return Math.floor(pagas + 0.05);
  }

}

