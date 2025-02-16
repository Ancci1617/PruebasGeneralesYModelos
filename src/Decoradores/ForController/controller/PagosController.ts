import { autoInjectable, inject, injectable } from "tsyringe";
import {CreatePagoService} from "../services/CreatePagoService";
import { Request,Response } from "express";
import { handleDomainError } from "../decorators/handleDomainError";

import {z} from "zod";
import { handleZodShema } from "../decorators/handleZodSchema";
import { defaultControllerErrorHandler } from "../decorators/defaultControllerErrorHandler";

const CrearPagoSchema = z.object({
    monto : z.number({required_error : "El monto es requerido",invalid_type_error : "El monto debe ser un numero"}),
    conErrorInesperado : z.boolean().default(false)
})


type CrearPagoRequest = Omit<Request,"body">& {
    body : z.infer<typeof CrearPagoSchema>
}
 


@injectable()
@autoInjectable()
export class PagosController{

    constructor(
        private crearPagoService : CreatePagoService
    ){
        
    }

    @defaultControllerErrorHandler()
    @handleZodShema(CrearPagoSchema)
    @handleDomainError
    async postCrearPago(req : CrearPagoRequest,res : Response){
        console.log("body recibido",req.body);
        if(req.body.conErrorInesperado) throw new Error("Error inesperado de prueba");

        await this.crearPagoService.run({
            monto : req.body.monto
        })
        res.status(200).json({message : "Pago creado correctamente."});
    }

}