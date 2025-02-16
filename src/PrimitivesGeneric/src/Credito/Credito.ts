import { Primitives } from "@codelytv/primitives-type";
import { Ficha } from "./ValueObjects/Ficha.js";
type tipado = Primitives<Credito>;


export class Credito{
    private ficha : Ficha
    constructor(
        ficha : Ficha ,
        public dato2 : number
    ){
        this.ficha = ficha;
    }


}
//se deben poder omitir datos
//se deben poder agregar arbitrarisamente q 






