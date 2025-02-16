import { Controller } from "../ControllerType";
import { InvalidArgumentError } from "../error/InvalidArgumentError";
import {NextFunction, Request, Response} from "express"




export function handleDomainError(
    target: any, 
    propertyKey: string, 
    descriptor: TypedPropertyDescriptor<Controller>
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = async function (req : Request,res : Response,next? : NextFunction){

        try {
            await metodoOriginal?.call(this,req,res,next);

        } catch (error) {
            if(error instanceof InvalidArgumentError){
                return res.status(400).json({message : error.message});
            }
            throw error;
        }

    }


}




