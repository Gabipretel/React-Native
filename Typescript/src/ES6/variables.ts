(()=>{

    type Hero = {
        nick:string;
        ironman: string;
        vision:string;
        activo:boolean;
        poder:number;
    }

    const avengers : Hero= {
        nick: 'Samuel Jackson',
        ironman:'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder:1500.12
    }

    const printAvengers = (avengers : Hero)=>{
        console.log(avengers.ironman)
    }
    printAvengers(avengers)

})()