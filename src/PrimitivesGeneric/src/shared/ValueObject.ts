export type Primitives = number | string | boolean;

export abstract class ValueObject<T extends Primitives>{

    constructor(value : T){};




}


