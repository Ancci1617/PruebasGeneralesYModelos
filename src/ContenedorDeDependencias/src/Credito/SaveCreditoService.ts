import { Credito } from "./Credito";
import { CreditoRepository } from "./CreditoRepository";
import {autoInjectable, inject, injectable} from "tsyringe"

@injectable()
export class SaveCreditoService{

    constructor(
       @inject("CreditoRepository") private repository : CreditoRepository
    ){

    }

    async run(){
        console.log("ejecutando service");
        console.log("repositorio recibido",this.repository)
        this.repository.save(new Credito(2400));
    }
    
    

}