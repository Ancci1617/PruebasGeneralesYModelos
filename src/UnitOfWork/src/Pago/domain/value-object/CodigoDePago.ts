import {v4 as uuid} from "uuid";

export class CodigoDePago{
    constructor(
        private codigo : string
    ){

    }

    static create(){
        return new CodigoDePago(uuid());
    }
    getValue(){
        return this.codigo
    }

}