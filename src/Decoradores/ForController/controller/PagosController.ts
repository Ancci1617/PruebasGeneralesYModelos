import { autoInjectable, inject, injectable } from "tsyringe";
import {CreatePagoService} from "../services/CreatePagoService";
import { Request,Response } from "express";
import { handleDomainError } from "../decorators/handleDomainError";

import {z, ZodError} from "zod";
import { handleZodShema } from "../decorators/handleZodSchema";
import { defaultControllerErrorHandler } from "../decorators/defaultControllerErrorHandler";
import { InvalidArgumentError } from "../error/InvalidArgumentError";

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

    @defaultControllerErrorHandler
    @handleZodShema(CrearPagoSchema)
    @handleDomainError
    async postCrearPago(req : CrearPagoRequest,res : Response){

        await this.crearPagoService.run({
            monto : req.body.monto
        })
        res.status(200).json({message : "Pago creado correctamente."});

    }


    

    async postCrearPagoCompleta(req : CrearPagoRequest,res : Response<{message : string}>){
        try {
            const validatedObject = CrearPagoSchema.safeParse(req.body);
            if(validatedObject.success == false) {
                res.status(400).json({
                    message : validatedObject.error
                    .issues.map(issue => issue.message).join(", ")
                })
                return;
            }
            await this.crearPagoService.run({
              monto : req.body.monto
            });
            res.status(200).json({
                message : "Creado corretamente"
            })
        } catch (error) {
            if(error instanceof InvalidArgumentError){
                res.status(400).json({
                    message : error.message
                })
            }
            console.log(error);
            res.status(400).json({message : (error as Error).message});
        }
        
    }

}