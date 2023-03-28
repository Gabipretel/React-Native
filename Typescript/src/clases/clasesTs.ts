(()=>{
        //Forma tradicional, forma más extensa.
    class Avenger{

        private name:string;
        public team:string;
        public  realName?:string;
        static avgAge:number =35; // Para acceder a propiedades estáticas se necesita llamar a la clase Avenger.avgAge

        constructor(name:string, team:string, realName?:string){
            this.name=name;
            this.team=team;
            this.realName=realName
        }
    }

    const capitanAmerica= new Avenger('Capitan America', 'Los vengadores', 'El vengador')
    // console.log(capitanAmerica)

    //Forma reducida o corta.
    
    class Avengers{

        // private name:string;
        // public team:string;
        // public  realName?:string;
        static avgAge:number =35; // Para acceder a propiedades estáticas se necesita llamar a la clase Avenger.avgAge

        constructor(
            private name:string, 
            public team:string, 
            public realName?:string){
            // this.name=name;
            // this.team=team;
            // this.realName=realName
            // Se elimina esto  y las propiedades arriba.
        }
    }

    const capitan= new Avengers('Capitana America', 'Los vengadores', 'La vengadora')
    console.log(capitanAmerica)
    console.log(Avengers.avgAge, 'avg promedio')


    //Metodos privados y publicos

    class JusticeLeague {
        constructor(
            public name:string,
            public team:string,
            private realName?:string
        ){}
        public bio (){
            return `${this.name} (${this.team}) ${this.realName}`
        }

    }

    const Batman = new JusticeLeague('Batman','Justice League','Bruce Wayne')
    console.log(Batman.bio())
    
    
    // Herencia, super y extends en Typescript


    class SuperHero {
        constructor(
            public name:string,
            public team:string,
            private realName?:string
        ){}
        public bio (){
            return `${this.name} (${this.team}) ${this.realName}`
        }

    }

    // const superman = new SuperHero('Superman','Justice League','Clark Kent')

    class Superman extends SuperHero{
       
        
        constructor( 
            team:string,
            name:string,
            realName: string,
            public esKriptoniano:boolean
            ){
                super(name,team ,realName)
            }
            fullName (){
                console.log(super.bio())
            }
        }
        const superman = new SuperHero('Superman','Justice League', 'Clark Kent')
        console.log(superman.bio())
        

        //Cuestion re metodos privados y protegidos..

        

        // Class Abstracta





})()