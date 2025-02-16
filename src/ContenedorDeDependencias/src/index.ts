import "reflect-metadata";
import "./Credito/dependencies";
import { container } from "tsyringe";
import { SaveCreditoService } from "./Credito/SaveCreditoService";


const service = container.resolve(SaveCreditoService);
const service2 = container.resolve(SaveCreditoService);



console.log(service.run());

