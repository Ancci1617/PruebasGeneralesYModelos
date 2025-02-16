

class Test{
    static staticValue : string = "my static value";



}

let t = new Test();

console.log((t.constructor as typeof Test).staticValue)