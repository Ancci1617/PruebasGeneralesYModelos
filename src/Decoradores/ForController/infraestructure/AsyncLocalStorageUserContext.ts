import { injectable, singleton } from "tsyringe";
import { UserContext, usuario } from "../domains/UserContext";

import {AsyncLocalStorage} from "async_hooks";

@singleton()
export class AsyncLocalStorageUserContext implements UserContext{

    constructor(){
        console.log("construyendo AsyncLocalStorageUserContext")
    }

    private store = new AsyncLocalStorage<usuario>();
    
    async inizializarUserContextStore(userId : string,callback : () => void){
        const user : usuario = {
            usuario : "rodrigo"
        }
        console.log("ejjecutando metodo run")
        this.store.run(user, () => {
            console.log("metodo run dentro con user",user)
            callback()
        })
    }

    getCurrentUser(): usuario {
        const user = this.store.getStore();
        console.log("user del store",user);
        if(!user) 
            throw new Error("No existe el store.");
        return user;
    }

}