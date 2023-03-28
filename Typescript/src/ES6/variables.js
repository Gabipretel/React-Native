"use strict";
(() => {
    const avengers = {
        nick: 'Samuel Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.12
    };
    const printAvengers = (avengers) => {
        console.log(avengers.ironman);
    };
    printAvengers(avengers);
})();
