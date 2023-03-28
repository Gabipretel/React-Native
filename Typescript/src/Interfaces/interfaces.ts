
//  Interfaces
(() => {
    //establecen reglas para los objetos. Tienen su diferencia con los types. Un tipo no puede expandirse pero una interfaz si, esa es la ppcipal diferencia.
    interface Hero {
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
    

    // Estructuras Complejas.

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress (id:string): void
    }

    interface Address{
        id: number;
        zip: number;
        city: string;
    }

    const client: Client ={
        name:'Gabriel',
        age:27,
        address:{
            id:1,
            zip:630,
            city:'General Pico'
        },
        getFullAddress(id) {
            return this.address.zip
        },
    }




})()
