import { injectable, singleton } from "tsyringe";
import { Credito } from "./Credito";
import { CreditoRepository } from "./CreditoRepository";


export class InMemoryCreditoRepository implements CreditoRepository {

    constructor() {
        console.log("crea InMemoryCreditoRepository");
        
    }

    async save(credito: Credito): Promise<void> {
        console.log("ejecuta save no hace nada")
    }
}