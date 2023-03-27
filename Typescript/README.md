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









