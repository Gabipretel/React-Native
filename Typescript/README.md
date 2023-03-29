# Fundamentos de typescript 
Typescript debe transpilarse a javascript sino no puede ser leido por el navegador. Por lo tanto luego es indiferente
si se usa muchos tipos de typescript en el código porque este no va a ocupar espacio, el transpilador(traductor)
va a convertirlo en js para poder correrlo.

Piense en ese TypeError que obtuvimos antes al intentar llamar a una cadena como una función. A la mayoría de las personas no les gusta recibir ningún tipo de error al ejecutar su código, ¡esos se consideran errores! Y cuando escribimos código nuevo, hacemos todo lo posible para evitar la introducción de nuevos errores.

Si agregamos solo un poco de código, guardamos nuestro archivo, volvemos a ejecutar el código e inmediatamente vemos el error, podríamos aislar el problema rápidamente; pero ese no es siempre el caso. ¡Es posible que no hayamos probado la función lo suficientemente a fondo, por lo que es posible que nunca nos encontremos con un error potencial que se produzca! O si tuviéramos la suerte de presenciar el error, podríamos haber terminado haciendo grandes refactorizaciones y agregando una gran cantidad de código diferente que nos vemos obligados a revisar.

Idealmente, podríamos tener una herramienta que nos ayude a encontrar estos errores antes de que se ejecute nuestro código. Eso es lo que hace un verificador de tipos estático como TypeScript. Los sistemas de tipos estáticos describen las formas y comportamientos de cuáles serán nuestros valores cuando ejecutemos nuestros programas. Un verificador de tipos como TypeScript usa esa información y nos dice cuándo las cosas pueden salirse de los rieles.

Fallos no excepcionales
Hasta ahora hemos discutido ciertas cosas como errores de tiempo de ejecución, casos en los que el tiempo de ejecución de JavaScript nos dice que piensa que algo no tiene sentido. Esos casos surgen porque la especificación ECMAScript tiene instrucciones explícitas sobre cómo debe comportarse el lenguaje cuando se encuentra con algo inesperado.

Por ejemplo, la especificación dice que intentar llamar a algo que no se puede llamar debería arrojar un error. Tal vez eso suene como "comportamiento obvio", pero podría imaginar que acceder a una propiedad que no existe en un objeto también debería arrojar un error. En cambio, JavaScript nos da un comportamiento diferente y devuelve el valor undefined: Ejemplo básico:


* * *
const user = {
  name: "Daniel",
  age: 26,
};
user.location; // returns undefined


* * *

En última instancia, un sistema de tipo estático tiene que hacer la llamada sobre qué código debe marcarse como un error en su sistema, incluso si es un JavaScript "válido" que no generará un error de inmediato. En TypeScript, el siguiente código produce un error sobre la ubicación no definida:

* * *
const user = {
  name: "Daniel",
  age: 26,
};
 
user.location;
Property 'location' does not exist on type '{ name: string; age: number; }'.

* * *


# Tipos de herramientas
TypeScript puede detectar errores cuando cometemos errores en nuestro código. Eso es genial, pero TypeScript también puede evitar que cometamos esos errores en primer lugar.

El verificador de tipos tiene información para verificar cosas como si estamos accediendo a las propiedades correctas en variables y otras propiedades. Una vez que tiene esa información, también puede comenzar a sugerir qué propiedades podría querer usar.

Eso significa que TypeScript también se puede aprovechar para editar código, y el verificador de tipo central puede proporcionar mensajes de error y completar el código a medida que escribe en el editor. Eso es parte de lo que la gente suele referirse cuando habla de herramientas en TypeScript.
Esto se refiere al autocompletado y la inteligencia de Ts para predecir que es lo que el programador utilizar.

TypeScript se toma muy en serio las herramientas, y eso va más allá de las terminaciones y los errores mientras escribe. Un editor que admita TypeScript puede ofrecer "soluciones rápidas" para corregir errores automáticamente, refactorizaciones para reorganizar fácilmente el código y funciones de navegación útiles para saltar a las definiciones de una variable o encontrar todas las referencias a una variable determinada. Todo esto se basa en el verificador de tipos y es completamente multiplataforma, por lo que es probable que su editor favorito tenga soporte de TypeScript disponible.


#  TypeScript compiler

Hemos estado hablando sobre la verificación de tipos, pero aún no hemos usado nuestro verificador de tipos. Conozcamos a nuestro nuevo amigo tsc, el compilador de TypeScript. Primero tendremos que tomarlo a través de npm.

* * * 
npm install -g typescript
 * * *

Esto instala el compilador de TypeScript tsc globalmente. Puede usar npx o herramientas similares si prefiere ejecutar tsc desde un paquete local de node_modules.

### Para instalar individualmente en el proyecto

* * *
npm install --save-dev typescript
* * *

# Configuraciones importantes del ts-config

noImplicitAny
Recuerde que, en algunos lugares, TypeScript no intenta inferir tipos por nosotros y, en cambio, recurre al tipo más indulgente: cualquiera. Esto no es lo peor que puede pasar; después de todo, recurrir a cualquiera es solo la experiencia simple de JavaScript de todos modos.

Sin embargo, usar any a menudo anula el propósito de usar TypeScript en primer lugar. Cuanto más tipeado esté su programa, más validación y herramientas obtendrá, lo que significa que se encontrará con menos errores a medida que codifica. Activar el indicador noImplicitAny generará un error en cualquier variable cuyo tipo se deduzca implícitamente como cualquiera.

Para iniciar un archivo de config, se debe usar npx tsc --init y crea el tsconfig.json
donde se puede hacer mas o menos estricto a typescript.
 ### Para iniciar el modo observador y que este atento a los cambios debo usar el 
 * * *
npx tsc -w
 * * *


# Observaciones
### No utilizar any
salvo excepciones porque impide utilizar el intelisense de typescript(autocomplete) y además las buenas prácticas indican que deben llevar cada variable,funcion,clase,etc un tipo definido.

# Arrays

* * *
const numbers : number[]= [1,2,3,45]
* * *

No se usan tuplas en la app.

# Enum

Las enumeraciones permiten a un desarrollador definir un conjunto de constantes con nombre. El uso de enumeraciones puede facilitar la documentación de la intención o crear un conjunto de casos distintos. TypeScript proporciona enumeraciones tanto numéricas como basadas en cadenas.


* * *
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
* * *


## Clases en el archivo src/clases y sus ejemplos.

##  Falta Rever Interfaces 
Una declaración de interfaz es otra forma de nombrar un tipo de objeto:

* * *
interface Hero{
  name: string;
  age?: number;
  powers: string[];
  getName?: () => string;
}
* * *

La diferencia fundamental de las Interfaces y los type son que las interfaces
pueden extenderse o expandirse, en cambio los type no.
Se usan para definir estructuras de objetos y para las peticiones http.
Los type se usan para definir algo que no se va a expandir.

Estructuras complejas
* * *

// Estructuras Complejas.

    interface Client {
        name: string;
        age?: number;
        address: Address
    }

    interface Address{
        id: number;
        zip: number;
        city: string;
    }

    const client: Client ={
        name:'Gabriel',
        age:27,
        address:{
            id:1,
            zip:630,
            city:'General Pico'
        }
    }
  * * *
### Http methods interfaces
### Interfaces para clases en interfacesClases.ts
* * *
* * *
## Falta Rever Genéricos Typescript

Una parte importante de la ingeniería de software consiste en crear componentes que no solo tengan API coherentes y bien definidas, sino que también sean reutilizables. Los componentes que son capaces de trabajar con los datos de hoy y los datos del mañana le brindarán las capacidades más flexibles para construir grandes sistemas de software.

En lenguajes como C# y Java, una de las herramientas principales en la caja de herramientas para crear componentes reutilizables son los genéricos, es decir, poder crear un componente que pueda funcionar con una variedad de tipos en lugar de uno solo. Esto permite a los usuarios consumir estos componentes y utilizar sus propios tipos.

Para empezar, hagamos el "hola mundo" de los genéricos: la función de identidad. La función de identidad es una función que devolverá todo lo que se le pase. Puede pensar en esto de manera similar al comando echo.

Sin genéricos, tendríamos que darle a la función de identidad un tipo específico:

* * *
function identity(arg: number): number {
  return arg;
}
* * *

O bien, podríamos describir la función de identidad usando cualquier tipo:

MALA PRACTICA USAR ANY(YA QUE SERIA COMO USAR JS CLASICO)

* * *
function identity(arg: any): any {
  return arg;
}
* * *

Si bien el uso de any es ciertamente genérico, ya que hará que la función acepte todos y cada uno de los tipos para el tipo de argumento, en realidad estamos perdiendo la información sobre cuál era ese tipo cuando la función regresa. Si pasamos un número, la única información que tenemos es que se puede devolver cualquier tipo.

En cambio, necesitamos una forma de capturar el tipo de argumento de tal manera que también podamos usarlo para indicar lo que se devuelve. Aquí, usaremos una variable de tipo, un tipo especial de variable que funciona con tipos en lugar de valores.

* * *

function identity<Type>(arg: Type): Type {
  return arg;
  }

Ahora hemos agregado una variable de tipo Tipo a la función de identidad. Este tipo nos permite capturar el tipo que proporciona el usuario (por ejemplo, número), para que podamos usar esa información más adelante. Aquí, usamos Type nuevamente como el tipo de devolución. En la inspección, ahora podemos ver que se usa el mismo tipo para el argumento y el tipo de retorno. Esto nos permite traficar ese tipo de información en un lado de la función y fuera del otro.

Decimos que esta versión de la función de identidad es genérica, ya que funciona en una variedad de tipos. A diferencia de usar any, también es tan preciso (es decir, no pierde ninguna información) como la primera función de identidad que usó números para el argumento y el tipo de retorno.


* * *

Ahora hemos agregado una variable de tipo Tipo a la función de identidad. Este tipo nos permite capturar el tipo que proporciona el usuario (por ejemplo, número), para que podamos usar esa información más adelante. Aquí, usamos Type nuevamente como el tipo de devolución. En la inspección, ahora podemos ver que se usa el mismo tipo para el argumento y el tipo de retorno. Esto nos permite traficar ese tipo de información en un lado de la función y fuera del otro.

Decimos que esta versión de la función de identidad es genérica, ya que funciona en una variedad de tipos. A diferencia de usar any, también es tan preciso (es decir, no pierde ninguna información) como la primera función de identidad que usó números para el argumento y el tipo de retorno.

Una vez que hemos escrito la función de identidad genérica, podemos llamarla de dos maneras. La primera forma es pasar todos los argumentos, incluido el argumento de tipo, a la función:


* **
 let output = identity<string>("myString");
      
let output: string
* * *

### Funciones Genéricas

El tipo any permite cualquier cosa pero a la vez no permite utilizar el intelissense de typescript
Me permite pasar cualquier tipo de dato y esto hace que el autocompletado de typescript me pueda ayudar y siempre va a servir para definir no solo los argumentos sino los retornos de las funciones q querramos que sean genericas.
Permite la reutilización.
Se puede utilizar interfaces que definan el tipo generico de la fn y esto determinara el tipo del argumento y el retorno de la fn, tdo estará condicionado.


Funcion generica
* * * 

    function genericFn<T>(arg: T):T{
        return arg
    }


* * *




