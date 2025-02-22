import { NextFunction, Request, Response } from "express";
import { Controller } from "../ControllerType";
import { container } from "tsyringe";
import { AsyncLocalStorageUserContext } from "../infraestructure/AsyncLocalStorageUserContext";


export function defaultControllerErrorHandler(
    target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<Controller>
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = async function (req : Request,res : Response,next? : NextFunction){
        try {
            await metodoOriginal?.call(this,req,res,next);

        } catch (error) {
            console.error(error);
            res.status(500).json({message : "Error inesperado"});
        }
    }

}
