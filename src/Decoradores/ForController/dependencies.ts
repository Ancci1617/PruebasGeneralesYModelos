import { container } from "tsyringe";
import { UserContext } from "./domains/UserContext";
import { AsyncLocalStorageUserContext } from "./infraestructure/AsyncLocalStorageUserContext";



container.registerSingleton<UserContext>("UserContext", AsyncLocalStorageUserContext);
