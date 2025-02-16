import "reflect-metadata";




function Transactional(
    target  : any, 
    key : string,
    descriptor : TypedPropertyDescriptor<(...args : any[]) => Promise<any>>
){
    
    const originalMetod  = descriptor.value!;

    descriptor.value = async function (...args : any[]){

        console.log("antes del metodo");
        await new Promise(res => {
            console.log("esperando promesa")
            setTimeout(res,3000);
        })
        const result = originalMetod.call(this,...args);
        console.log("despues del metodo");
    }

    console.log({target,key,descriptor});   
    console.log("value",descriptor.value);
}
class A{

    @Transactional
    async metodoTransaccional() : Promise<number>{
        return 1;
    }
}

const instancia = new A();
async function init(){

    const resultadoDeMetodoTransaccional = await instancia.metodoTransaccional();
    console.log({resultadoDeMetodoTransaccional})
}


init();