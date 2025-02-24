import { container } from "tsyringe";
import {UnitOfWork_INJECTION_TOKEN,UnitOfWork} from "../domain/interfaces/UnitOfWork";
import { AsyncLocalStorageUnitOfWork } from "./AsyncLocalStorageUnitOfWork/AsyncLocalStorageUnitOfWork";

container.registerSingleton<UnitOfWork>(UnitOfWork_INJECTION_TOKEN,AsyncLocalStorageUnitOfWork);

