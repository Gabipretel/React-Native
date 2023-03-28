"use strict";
(() => {
    //Forma tradicional, forma más extensa.
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35; // Para acceder a propiedades estáticas se necesita llamar a la clase Avenger.avgAge
    const capitanAmerica = new Avenger('Capitan America', 'Los vengadores', 'El vengador');
    // console.log(capitanAmerica)
    //Forma reducida o corta.
    class Avengers {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            // this.name=name;
            // this.team=team;
            // this.realName=realName
            // Se elimina esto  y las propiedades arriba.
        }
    }
    // private name:string;
    // public team:string;
    // public  realName?:string;
    Avengers.avgAge = 35; // Para acceder a propiedades estáticas se necesita llamar a la clase Avenger.avgAge
    const capitan = new Avengers('Capitana America', 'Los vengadores', 'La vengadora');
    console.log(capitanAmerica);
    console.log(Avengers.avgAge, 'avg promedio');
    //Metodos privados y publicos
    class JusticeLeague {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team}) ${this.realName}`;
        }
    }
    const Batman = new JusticeLeague('Batman', 'Justice League', 'Bruce Wayne');
    console.log(Batman.bio());
    // Herencia, super y extends en Typescript
    class SuperHero {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team}) ${this.realName}`;
        }
    }
    // const superman = new SuperHero('Superman','Justice League','Clark Kent')
    class Superman extends SuperHero {
        constructor(team, name, realName, esKriptoniano) {
            super(name, team, realName);
            this.esKriptoniano = esKriptoniano;
        }
        fullName() {
            console.log(super.bio());
        }
    }
    const superman = new SuperHero('Superman', 'Justice League', 'Clark Kent');
    console.log(superman.bio());
    //Cuestion re metodos privados y protegidos..
    // Class Abstracta
})();
