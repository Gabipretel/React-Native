(()=>{

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
    console.log(capitanAmerica)



})()