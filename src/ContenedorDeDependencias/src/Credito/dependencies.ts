import {container} from "tsyringe"
import { CreditoRepository } from "./CreditoRepository"
import { InMemoryCreditoRepository } from "./InMemoryCreditoRepository"
import { Credito } from "./Credito";

class MockCreditosRepository implements CreditoRepository{
    async save(credito: Credito): Promise<void> {
        
    }
}

container.registerSingleton<CreditoRepository>("CreditoRepository", InMemoryCreditoRepository);

container.registerSingleton<CreditoRepository>("CreditoRepository", MockCreditosRepository);

