import { Credito } from "./Credito";

export interface CreditoRepository{

    save(credito : Credito) : Promise<void>

}