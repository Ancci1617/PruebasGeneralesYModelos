import { inject } from "tsyringe";
import { CreditoRepository ,CreditoRepository_INJECTION_TOKEN} from "../domain/interfaces/CreditoRepository";
import { DomainEventClass } from "../../shared/domain/DomainEvent";
import { DomainEventSubscriber } from "../../shared/domain/DomainEventSubscriber";
import { PagoCargado } from "../../Pago/domain/PagoCargado";
import { Transactional } from "../../shared/domain/Decorators/Transactional";
import { PagoAlCredito } from "../domain/PagoAlCredito";
import { DistribucionDePago } from "../../Pago/domain/value-object/DistribucionDePago";
import { DistribucionPorCuota } from "../../Pago/domain/value-object/DistribucionPorCuota";
import { CodigoDePago } from "../../Pago/domain/value-object/CodigoDePago";

export class PasarPagoOnPagoCargado  implements DomainEventSubscriber<PagoCargado>{

    constructor(
        @inject(CreditoRepository_INJECTION_TOKEN)
        private creditosRepository : CreditoRepository,

    ){
    }
    listeningTo(): DomainEventClass {
        return PagoCargado;
    }

    @Transactional
    async on(event: PagoCargado): Promise<void> {

        const {creditoId,distribucion,codigoDePago} = event.payload();

        const credito = await this.creditosRepository.getById(creditoId);
        if(!credito) 
            throw new Error("No se encontro el credito");

        const pagoAlCredito = new PagoAlCredito(
            new DistribucionDePago(
                distribucion.cuota,
                new DistribucionPorCuota(distribucion.servicios)
            ),
            new CodigoDePago(codigoDePago)
        );
        credito.pasarPago(pagoAlCredito);

    }

 

}