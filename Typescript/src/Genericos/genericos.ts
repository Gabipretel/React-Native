// Genericos    
(()=>{
    //Es una fn generica por el tipo any pero no se recomienda para nada esto.
    //NO HACER ESTO
    const printObj=(arg:any)=>{
        console.log(arg)
    }

    // demo 1
    function genericFn<T>(arg: T):T{
        return arg
    }

    const arrowFnGeneric =<T> (arg:T)=> arg


    // Asi se define una fn generica
    function name<Type>(arg: Type): Type {
        return arg;
      }


// console.log(name('gabo'))
console.log(genericFn('texto').length)

})()

