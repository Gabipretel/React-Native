"use strict";
// Genericos    
(() => {
    //Es una fn generica por el tipo any pero no se recomienda para nada esto.
    const printObj = (arg) => {
        console.log(arg);
    };
    // demo 1
    function genericFn(arg) {
        return arg;
    }
    // Asi se define una fn generica
    function name(arg) {
        return arg;
    }
    // console.log(name('gabo'))
    console.log(genericFn('texto').length);
})();
