import "reflect-metadata"
import { container } from "tsyringe";
import "./dependencies";
import { PagosController } from "./controller/PagosController";
import express from "express";
import { AsyncLocalStorageUserContext } from "./infraestructure/AsyncLocalStorageUserContext";


const app = express();


app.use(express.json());



const crearPagoService = container.resolve(PagosController);

const userContext = container.resolve("UserContext") as AsyncLocalStorageUserContext;
const userContext2 = container.resolve(AsyncLocalStorageUserContext);
const userContext3 = container.resolve(AsyncLocalStorageUserContext);
const userContext4 = container.resolve(AsyncLocalStorageUserContext);

app.use((req,res,next) => userContext.inizializarUserContextStore("My id",next));

app.post("/pagos",crearPagoService.postCrearPago.bind(crearPagoService))

app.listen(3000)