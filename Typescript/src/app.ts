const hello: string = 'hello people!'

const demo: number = 27

const a: number = 10

let b: number
b = 3.1415

function sayHell0(msg: string) {
    console.log(msg.concat(',soy el gabo'))
}
sayHell0('hola ts')

let isB: boolean = true
let c: number = 20


const players: string[] = ['Gabi', 'Mauri', 'Jorge']

// Combinación de datos en un array. (number| string)[]
const numbers: (number | string)[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'hola']


enum Super {
    pan,
    carne,
    fideos,
}

const pan = Super.pan
const carne = Super.carne
const fideos = Super.fideos

// Functions

const noRegresaNada = (): void => {
    return
}

const nameHero = (): string => {
    return 'Batman'
}

const variosTipos = (): (boolean | string) => {
    const a: boolean = false
    const b: string = 'demo'
    return b
}


const getFullName = (name: string, lastName?: string, upper: boolean = false): string => {
    if (upper) {
       return `${name} ${lastName}}`.toUpperCase()
    } else {
      return  `${name} ${lastName}`.toLowerCase()
    }

}
console.log(getFullName('Gabriel', 'Pretel'))

//Parametros REST

const fullResParams = (name:string,lastName:string,...rest:string[]):string=>{
return `${name }, ${lastName} ${rest.join(' ')}`
}
const hero = fullResParams('gabo','pretel','sanchez')
console.log(hero)





 

