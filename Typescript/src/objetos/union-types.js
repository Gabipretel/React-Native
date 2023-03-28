"use strict";
(() => {
    // Mutiples tipos en una variable
    let customVariable = 'Gabriel';
    console.log(typeof customVariable);
    customVariable = 20;
    console.log(typeof customVariable);
    customVariable = {
        name: 'Batman',
        age: 40,
        powers: ['Batimovil', 'gancho para escalar']
    };
    console.log(typeof customVariable);
})();
