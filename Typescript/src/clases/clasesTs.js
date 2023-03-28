"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    const capitanAmerica = new Avenger('Capitan America', 'Los vengadores', 'El vengador');
    console.log(capitanAmerica);
})();
