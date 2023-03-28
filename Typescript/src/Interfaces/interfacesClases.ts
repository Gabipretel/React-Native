// Interfaces en Clases

(() => {

    interface Xmen {
        name: string;
        realName: string;
        mutantPower?(id: number): string;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human {
        public age!: number;
        public name!: string;
        public realName!: string;
    }



    //Esto no se hace normalmente.

    interface AddTwoNumbers {
        (a: number, b: number): number
    }
    let add: AddTwoNumbers;

    add = (a: number, b: number) => {
        return a + b
    }

    console.log(add(3, 2))

    //

    interface PersonaIn {
        edad: number;
        estadoCivil: boolean;
        nombre: string;
        sexo: string;
        printBio(): void
    }


    class Persona implements PersonaIn {
        edad!: number;
        estadoCivil!: boolean;
        nombre!: string;
        sexo!: string;
        printBio() {

        }
    }

})()


