(() => {
    //establecen reglas para el obj,variables.etc
    type Hero= {
        name:string;
        age:number;
        powers:string[];
        getName?: () => string;
        
    }
    

    let flash:Hero = {
        name : 'Barry Allen',
        age:24,
        powers:['super velocidad','viajar en el tiempo']
    }
    
    let superman: Hero = {
        name:'Superman',
        age:35,
        powers:['SuperFuerza'],
        getName (){
            return this.name
        }
    }
    console.log(superman.getName?.()) //agregar operador condicional,sino marca error.


})()