"use strict";
//  Interfaces
(() => {
    var _a;
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['super velocidad', 'viajar en el tiempo']
    };
    let superman = {
        name: 'Superman',
        age: 35,
        powers: ['SuperFuerza'],
        getName() {
            return this.name;
        }
    };
    console.log((_a = superman.getName) === null || _a === void 0 ? void 0 : _a.call(superman)); //agregar operador condicional,sino marca error.
    const client = {
        name: 'Gabriel',
        age: 27,
        address: {
            id: 1,
            zip: 630,
            city: 'General Pico'
        },
        getFullAddress(id) {
            return this.address.zip;
        },
    };
})();
