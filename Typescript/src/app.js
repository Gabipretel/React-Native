"use strict";
const hello = 'hello people!';
const demo = 27;
const a = 10;
let b;
b = 3.1415;
function sayHell0(msg) {
    console.log(msg.concat(',soy el gabo'));
}
sayHell0('hola ts');
let isB = true;
let c = 20;
const players = ['Gabi', 'Mauri', 'Jorge'];
// Combinación de datos en un array. (number| string)[]
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'hola'];
var Super;
(function (Super) {
    Super[Super["pan"] = 0] = "pan";
    Super[Super["carne"] = 1] = "carne";
    Super[Super["fideos"] = 2] = "fideos";
})(Super || (Super = {}));
const pan = Super.pan;
const carne = Super.carne;
const fideos = Super.fideos;
// Functions
const noRegresaNada = () => {
    return;
};
const nameHero = () => {
    return 'Batman';
};
const variosTipos = () => {
    const a = false;
    const b = 'demo';
    return b;
};
const getFullName = (name, lastName, upper = false) => {
    if (upper) {
        return `${name} ${lastName}}`.toUpperCase();
    }
    else {
        return `${name} ${lastName}`.toLowerCase();
    }
};
console.log(getFullName('Gabriel', 'Pretel'));
//Parametros REST
const fullResParams = (name, lastName, ...rest) => {
    return `${name}, ${lastName} ${rest.join(' ')}`;
};
const hero = fullResParams('gabo', 'pretel', 'sanchez');
console.log(hero);
