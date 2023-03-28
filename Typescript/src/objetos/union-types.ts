(() => {
    // Mutiples tipos en una variable

    //establecen reglas para el obj,variables.etc
    type Hero= {
        name:string;
        age:number;
        powers:string[];
        getName?: () => string;
        
    }

    let customVariable: (string | number | Hero)= 'Gabriel'
    console.log(typeof customVariable)
    customVariable= 20
    console.log(typeof customVariable)
    customVariable={
        name:'Batman',
        age:40,
        powers:['Batimovil','gancho para escalar']
    }
    console.log(typeof customVariable)
    



})()