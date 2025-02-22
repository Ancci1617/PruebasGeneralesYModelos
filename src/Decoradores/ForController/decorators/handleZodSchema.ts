import { ZodError, ZodType } from "zod";
import { Controller } from "../ControllerType";
import { NextFunction, Request, Response } from "express";

export const handleZodShema = (schema : ZodType) => (
    target: any, 
    propertyKey: string, 
    descriptor: TypedPropertyDescriptor<Controller>
) => {

    const metodoOriginal = descriptor.value!;

    descriptor.value = async function (req : Request,res : Response,next? : NextFunction){
        

        try {
            const validatedObject = schema.parse(req.body);
            req.body = validatedObject;
            await metodoOriginal.call(this,req,res,next);
            
        } catch (error) {
            if(error instanceof ZodError){
                res.status(400).json({
                    message : error.issues.map(issue => issue.message).join(", ")
                })
                return;
            }
            throw error;
        }

    }

    

}