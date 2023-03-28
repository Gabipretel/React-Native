"use strict";
(() => {
    var _a;
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['super velocidad', 'viajar en el tiempo']
    };
    flash = {
        name: 'Superman',
        age: 35,
        powers: ['SuperFuerza'],
        getName() {
            return this.name;
        }
    };
    console.log({ flash });
    console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
})();
