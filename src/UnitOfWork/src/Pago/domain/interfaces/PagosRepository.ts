import { Pago } from "../Pago";

export const PagosRepository_INJECTION_TOKEN = "PagosRepository";


export interface PagosRepository{
    save(pago : Pago) : Promise<void>;

}