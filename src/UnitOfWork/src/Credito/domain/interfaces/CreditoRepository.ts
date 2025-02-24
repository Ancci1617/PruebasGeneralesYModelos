import { Credito } from "../Credito"

export const CreditoRepository_INJECTION_TOKEN = "CreditoRepository"

export interface CreditoRepository {

    getById(creditoId : number): Promise<Credito | null>;
    
    save(credito : Credito): Promise<void>;

}
