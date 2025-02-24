import { Transferencia } from "src/UnitOfWork/src/Transferencia/domain/Transferencia";
import { Pago } from "../Pago";
import {Credito} from "../../../Credito/domain/Credito";
export class PasarPago{

    run(monto : number,credito : Credito,transferencia? : Transferencia) : Pago {
        
        //Si existe la transferencia valida el monto.
        if(transferencia && transferencia.montoSinPagosAsociados() < monto) {
            throw new Error("El monto excede el monto de la transferencia");
        }

        const distribucion = credito.cobrar(monto);
        
        return Pago.create({
            distribucion,
            creditoId : credito.getCreditoId(),
            numeroDeTransferencia : transferencia?.getNumeroDeOperacion() || null
        });

    }

}