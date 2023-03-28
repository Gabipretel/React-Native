(()=>{

//Clases ES6 en Typescript 



class Car {
    modelo:string;
    puertas: number;
    hp:number;

    constructor (modelo:string,puertas:number,hp:number){
        this.modelo= modelo;
        this.puertas= puertas;
        this.hp=hp;
    }
}


const ferrari = new Car('Enzo',4,500)
// console.log(ferrari)


class Mercedes extends Car {
    creador: string;
    premios:string[];
    
    constructor (modelo:string,puertas:number,hp:number,creador:string, premios:string[]) {
        super(modelo,puertas,hp) //aqui van los argumentos del padre
        this.creador=creador
        this.premios=premios
    }
    
}

const mercedes= new Mercedes('benz',3,500,'Gabo', ['2003'])
console.log(mercedes)

})()

