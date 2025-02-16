import { inject, injectable } from "tsyringe";
import { MontoDePago } from "../domains/MontoDePago";
import { UserContext } from "../domains/UserContext";

@injectable()
export class CreatePagoService{
    
    constructor(
        @inject("UserContext")
        private userContext : UserContext
    ){
        console.log("construyendo CreatePagoService")
    }

    async run(params : {monto : number}){
        const user = this.userContext.getCurrentUser();
        const monto = new MontoDePago(params.monto);
        console.log("USER IN SERVICE FROM USERCONTEXT",user);
        console.log("Pago creado correctamente.");

    }

}
