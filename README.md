# Docs React Native
## Introduction

Simple example

* * *
import React from 'react';
import {Text, View} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Buenos dias🎉
       Todo componente debe retornar un View, y para introducir texto
        se necesita un Text, ambos importados desde react-native</Text>
    </View>
  );
};

export default App

* * *

Class Component

* * *
import React, {Component} from 'react';
import {Text, View} from 'react-native';

class HelloWorldApp extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
}

export default HelloWorldApp;

* * *


## Core Componentes And Native Components

Un componente native puede devolver una vista o más anidadas, incluso en el return podría ir un fragment de React.


## React Native UI component
* * *
<View>	<ViewGroup>	<UIView> // Un <div> sin desplazamiento 
// Un contenedor que admite el diseño con flexbox, estilo, algunos controles táctiles y de accesibilidad.

<Text>	<TextView>	<UITextView>	// <p>  
//Muestra, diseña y anida cadenas de texto e incluso maneja eventos táctiles

<Image>	<ImageView>	<UIImageView>	<img>
Muestra diferentes tipos de imágenes

<ScrollView>	<ScrollView>	<UIScrollView>	<div> 
Un contenedor de desplazamiento genérico que puede contener múltiples componentes y vistas


<TextInput>	<EditText>	<UITextField>	<input type="text">
Permite al usuario ingresar texto
* * *

## Example

## ScrollViewExample

* * * 
import React from 'react'
import { Image, ScrollView,Text,TextInput,View} from 'react-native'

const ScrollViewExample = () => {
  return (
    
    <ScrollView>
      <Text>ScrollView </Text>
      <View>
          <Text>
            Nombre:
          </Text>
          <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput  style={{
          height: 40,
          width:200,
          borderColor: 'gray',
          borderWidth: 1,
          
        }}/>
    </ScrollView>
    
  )
}

export default ScrollViewExample
* * *
# Comentario importante: Tanto image como textInput necesitan estilos, sino no aparece un estilo por defecto.(a dif der React-Web)


# React Fundamentals

En Android, generalmente coloca sus vistas dentro de LinearLayout, FrameLayout, RelativeLayout, etc. para definir cómo se organizarán los elementos secundarios de la vista en la pantalla. En React Native, View usa Flexbox para el diseño de sus hijos. Puede obtener más información en nuestra guía de diseño con Flexbox.

### Ver en el proyecto como se organizan elementos secundarios


# Handling Text Input
# Simple Example

* * *
import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
    </View>
  );
};

export default PizzaTranslator;

* * *

# Using a ScrollView 
ScrollView es un contenedor de desplazamiento genérico que puede contener múltiples componentes y vistas. Los elementos desplazables pueden ser heterogéneos y puede desplazarse tanto vertical como horizontalmente (estableciendo la propiedad horizontal).

Este ejemplo crea un ScrollView vertical con imágenes y texto combinados.

ScrollViews se puede configurar para permitir la paginación a través de las vistas mediante gestos de deslizamiento mediante el uso de los apoyos pagingEnabled. El deslizamiento horizontal entre vistas también se puede implementar en Android usando el componente ViewPager.

ScrollView funciona mejor para presentar una pequeña cantidad de cosas de un tamaño limitado. Se representan todos los elementos y vistas de ScrollView, incluso si no se muestran actualmente en la pantalla. Si tiene una lista larga de elementos que no caben en la pantalla, debe usar FlatList en su lugar. Entonces, a continuación, aprendamos sobre las vistas de lista.



# Using List Views and Demos

## FlatList Basics
* * * 
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default FlatListBasics;

* * *
## SectionList Basics

* * *
import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const SectionListBasics = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
          {
            title: 'J',
            data: [
              'Jackson',
              'James',
              'Jillian',
              'Jimmy',
              'Joel',
              'John',
              'Julie',
            ],
          },
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={item => `basicListEntry-${item}`}
      />
    </View>
  );
};

export default SectionListBasics;

* * *

# Design
## StyleSheet
La propiedad de estilo puede ser un objeto JavaScript simple y antiguo. Eso es lo que solemos usar como código de ejemplo. También puede pasar una matriz de estilos: el último estilo de la matriz tiene prioridad, por lo que puede usar esto para heredar estilos.

A medida que un componente crece en complejidad, a menudo es más sencillo usar StyleSheet.create para definir varios estilos en un solo lugar. Aquí hay un ejemplo:

* * *
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>just red</Text>
      <Text style={styles.bigBlue}>just bigBlue</Text>
      <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
      <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default LotsOfStyles;


* * *

# Layout with Flexbox
Un componente puede especificar el diseño de sus elementos secundarios utilizando el algoritmo Flexbox. Flexbox está diseñado para proporcionar un diseño uniforme en diferentes tamaños de pantalla.

Normalmente usará una combinación de flexDirection, alignItems y allowContent para lograr el diseño correcto.

### Nota
Flexbox funciona de la misma manera en React Native que en CSS en la web, con algunas excepciones. Los valores predeterminados son diferentes, con flexDirection predeterminado en columna en lugar de fila, alignContent predeterminado en flex-start en lugar de stretch, flexShrink predeterminado en 0 en lugar de 1, el parámetro flex solo admite un solo número.

### Flex 

### Box Model Object(height,width,padding,border,margin)

### Position(absolute,relative,top,left,right,bottom)
Cuando se crea un componente su posición es relativa(por defecto),y el
valor absoluto se puede establecer  

### Dimensiones
Estas varían de acuerdo al contenedor padre (view) y en función de su tamaño ancho y alto, los hijos se van a acomodar.
Dimensions de React-Native tiene el inconveniente de no actualizar el tamaño de la pantalla(window) en tiempo real, por lo
tanto se usa el hook llamado useWindowsDimensions el cual es un obj y se destructura tanto el ancho como el alto.
Nota: primero hay que importarlo.
useWindowDimensions actualiza automáticamente todos sus valores cuando cambia el tamaño de la pantalla o la escala de fuente. Puede obtener el ancho y la altura de la ventana de su aplicación así
* * *
import {useWindowDimensions} from 'react-native';

const {height, width} = useWindowDimensions();

### Viene una libreria llamada  React Native Responsive Dimensions.(NO USAR.)


# Arranca Herrera en la carpeta 02-firstApp.

### Para agregar estilos locales, defino una variable con sintaxis clave-valor.

* * * 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8FD694',
        justifyContent: 'center'

    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        position: 'relative',
        top: -40
    },

})
* * *

# Para agregar botones, existen 3, Touchable Highlight, TouchableOpacity,TouchableWithoutFeedBack.

## Para hacer un btn flotante en ambas plataformas ios y android, debemos utilizar PlatForm para retornar una view y componente distinto adaptado a cada plataforma.
## Pasos : Crear dos funciones que retornen JSX y con un renderizado condicional ya está(preguntar si es OS o Android) y de ahi retornar uno u otro estilizado para que se vea bien.

## Ejemplo:

* * * 
const Fab = ({ title, position = 'br', onPress }: Props) => {

    const ios =()=>{
        return(
            <TouchableOpacity 
            activeOpacity={0.8} 
            style={[styles.btnFab, (position === 'bl') ? styles.left : styles.right]} onPress={onPress}>

            {/* <TouchableOpacity style={position === 'bl' ? styles.btnFabL : styles.btnFabR} onPress={onPress} > */}
                <View style={styles.btn}>
                    <Text style={styles.btnText} >{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android =()=>{
        return(
            <View style={[styles.btnFab, (position === 'bl') ? styles.left : styles.right]}>

            {/* <TouchableOpacity style={position === 'bl' ? styles.btnFabL : styles.btnFabR} onPress={onPress} > */}
    
            <TouchableNativeFeedback  
            onPress={onPress} 
            background={TouchableNativeFeedback.Ripple('#bacfcb',false,30)} >
                <View style={styles.btn}>
                    <Text style={styles.btnText} >{title}</Text>
                </View>
            </TouchableNativeFeedback >
            </View>
        )
    }

 
    return (Platform.OS === 'ios') ? ios() : android()
}

export default Fab
* * *


## App calculadora(manejo de hooks,useState useRef,customHooks,etc.)

# React Navigation React-Native
Pasos de instalación en la web, instalar modulo e configurar archivo Java.
Debemos envolver toda nuestra app en un Navigation Container.

Existen varios tipos de navegación estaré cubriendo los del proyecto tanto
el stack navigator(navegación por botones basicamente entre pantallas o screens) 
y el drawer Navigator(la barra lateral de web.)

### Existen 4 navegaciones :

### Stack Navigation
Pila de screens, se mantienen activas y se usa el navigation.navigate,
el cual es un objeto el (navigation), se puede extraer mediante hooks
o tmb por los props q tmb se envia por ahí.
Para deshacernos de las tarjetas o screens hay varias formas:
navigation.pop--> q destruye la  ultima pantalla en donde esta el usuario.
navigation.popToTop---> Vuelve a la primera carta o screen principal.
navigation.goBack---> Vuelve a la pantalla anterior.

Cuando creamos un proyecto no existe un stack,sino que hay que crearlo.

Envolviendo su aplicación en NavigationContainer:

  Ahora, necesitamos envolver toda la aplicación en NavigationContainer. Por lo general, haría esto en su archivo de entrada, como index.js o App.js:

* * *
    import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
    {/* Rest of your app code */}
    </NavigationContainer>
  );
}
* * *

createNativeStackNavigator es una función que devuelve un objeto que contiene 2 propiedades: Pantalla y Navegador. Ambos son componentes de React que se utilizan para configurar el navegador. El navegador debe contener elementos de pantalla como elementos secundarios para definir la configuración de las rutas.

NavigationContainer es un componente que gestiona nuestro árbol de navegación y contiene el estado de navegación. Este componente debe envolver toda la estructura de los navegadores. Por lo general, renderizaríamos este componente en la raíz de nuestra aplicación, que suele ser el componente exportado desde App.js


* * *

// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
* * *

### Como interactuar para que vaya a otra pagina o Screen??
Con el evento onPress() que debe recibir navigation que viene de Stack Navigator y se debe extender de stackScreenProps 
VER DEMO Pagina1Screen.
Pasos: crear interface Props y extenderla de StackScreenProps <any,any>{}
esto viene de react-navigation/stack
Desestructurar {navigacion} es un objeto en las props y luego llamar navigation.navigate desde el evento OnPress en un buttom.


Navigation.pop()--> lleva para atrás(pag anterior visitada)
Navigation.popToTop()--> lleva a la pag inicial, el home.

### Propiedades importantes del Stack.Navigator

initialRouteName->Aplican Globalmente. Path inicial de la app(Screen inicial).
ScreenOptions-> Tiene el headerShow y cardStyle, entre otras opciones q hay tanto en IOS y en android


Enviar parametros esta en la pag4Screen.(Pasa del pag1 al 4 ahi se puede ver la lógica....)

Forma 2-> empieza haciendo un type en el stackNavigator luego
* * *
const Stack = createStackNavigator<RootStackParams>();
* * *
en el stack para decirle el type q tiene q ser para las screens,
luego esto en el screen
->
* * * 
interface Props extends StackScreenProps<RootStackParams,'Pagina4Screen'>
* * *

# useNavigation (No esta presente en el py.)
VER DEMO Pagina2Screen donde se usa la navegación pero desde el hook propio del
react navigation llamado useNavigation().
//  Este hook trae el objeto de la navegación.
useNavigation es un gancho que da acceso al objeto de navegación. Es útil cuando no puede pasar el accesorio de navegación directamente al componente o no quiere pasarlo en el caso de un elemento secundario profundamente anidado.

useNavigation() devuelve el accesorio de navegación de la pantalla en la que se encuentra.

### Drawer Navigation
Instalaciones se necesitan las de la introduccion de la pag
Sino no anda.

Para usarlo la estructura básica es esta: 
* * *
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}


* * *
* * *
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerPosition: 'left',
                headerShown: true,
            }}

        >
            <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScreen} />
        </Drawer.Navigator>
    )
}
* * *
Para pasar algunas propiedades usar screenOptions


Para hacer un btn q despliegue el drawer usar la siguiente lógica: (Sobre todo puede ser asi para el proyecto ya que lleva 2 años)
En versiones modernas de drawer, ya viene un menu lateral hamburguesa para desplegar las pantallas.
* * *
  useEffect(() => {
      navigation.setOptions({
        headerLeft: ()=><Button
          title='Menu'
          onPress={()=> navigation.toggleDrawer()}
          />
      })
* * *
Puede devolver un Touchable para modificarlo y poner un icono. Otra cosa el header puede ir a la derecha etc.


### BottomTab Navigator
(Es para IOS)
Una simple barra de pestañas en la parte inferior de la pantalla que le permite cambiar entre diferentes rutas. Las rutas se inicializan de forma perezosa: sus componentes de pantalla no se montan hasta que se enfocan por primera vez.
Importante: Los useEffect -> en ppio se cargan una sola vez que se ingresa a lo tabs
imagino que al pasarle dependencias al [ ] deberían volver a renderizar, pero queda a
revisión.

### MaterialTabBottom Navigator
Para hacer las instalaciones generales -> no olvidar el getting started
(Es para android.)

Una barra de pestañas temática de diseño de materiales en la parte inferior de la pantalla que le permite cambiar entre diferentes rutas con animación. Las rutas se inicializan de forma perezosa: sus componentes de pantalla no se montan hasta que se enfocan por primera vez.

Esto envuelve el componente BottomNavigation de react-native-paper. Si configura el complemento de Babel, no incluirá toda la biblioteca de reactivos nativos en papel en su paquete.


### MaterialTop Navigation 


Para hacer las instalaciones generales -> no olvidar el getting started
(Es para android.)

Una barra de pestañas temática de diseño de materiales en la parte superior de la pantalla que le permite cambiar entre diferentes rutas tocando las pestañas o deslizando horizontalmente. Las transiciones están animadas de forma predeterminada. Los componentes de pantalla para cada ruta se montan inmediatamente.

### Context React-Native.(Store-React)
Ver imagen arbol de componentes.
Componente que va a conectar con los demás componentes sin la necesidad de psar metodo o props de padre a hijo.
https://es.reactjs.org/docs/context.html

* * *

* * *

Context provee una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel.

En una aplicación típica de React, los datos se pasan de arriba hacia abajo (de padre a hijo) a través de props, pero esta forma puede resultar incómoda para ciertos tipos de props (por ejemplo, localización, el tema de la interfaz) que son necesarias para muchos componentes dentro de una aplicación. Context proporciona una forma de compartir valores como estos entre componentes sin tener que pasar explícitamente una prop a través de cada nivel del árbol.


Cuándo usar Context
Context está diseñado para compartir datos que pueden considerarse “globales” para un árbol de componentes en React, como el usuario autenticado actual, el tema o el idioma preferido. Por ejemplo, en el código a continuación, pasamos manualmente una prop de “tema” para darle estilo al componente Button:


Vemos como se pasa de padre(toolbar) a hijo (themeButton). Se volvería tedioso en un app grande como la de agripay.
Rever redux además de context.


* * * 
class App extends React.Component {
  render() {
    return <Toolbar theme="dark" />;
  }
}

function Toolbar(props) {
  // El componente Toolbar debe tener un prop adicional "theme"
  // y pasarlo a ThemedButton. Esto puede llegar a ser trabajoso
  // si cada botón en la aplicación necesita saber el tema,
  // porque tendría que pasar a través de todos los componentes.
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />;
  }
}

* * *

Usando Context podemos evitar pasar props a través de elementos intermedios:

* * *

// Context nos permite pasar un valor a lo profundo del árbol de componentes
// sin pasarlo explícitamente a través de cada componente.
// Crear un Context para el tema actual (con "light" como valor predeterminado).
const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    // Usa un Provider para pasar el tema actual al árbol de abajo.
    // Cualquier componente puede leerlo, sin importar qué tan profundo se encuentre.
    // En este ejemplo, estamos pasando "dark" como valor actual.
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// Un componente en el medio no tiene que
// pasar el tema hacia abajo explícitamente.
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Asigna un contextType para leer el contexto del tema actual.
  // React encontrará el Provider superior más cercano y usará su valor.
  // En este ejemplo, el tema actual es "dark".
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}
* * *
Todo lo anterior en componentes de clases.


Context se usa principalmente cuando algunos datos tienen que ser accesibles por muchos componentes en diferentes niveles de anidamiento. Aplícalo con moderación porque hace que la reutilización de componentes sea más difícil.

Si solo deseas evitar pasar algunos props a través de muchos niveles, la composición de componentes suele ser una solución más simple que Context.

Por ejemplo, considera un componente Page que pasa una prop user y avatarSize varios niveles hacia abajo para que los componentes anidados Link y Avatar puedan leerlo:

NO HACER ESTO:

 * * *
<Page user={user} avatarSize={avatarSize} />
// ... que renderiza ...
<PageLayout user={user} avatarSize={avatarSize} />
// ... que renderiza ...
<NavigationBar user={user} avatarSize={avatarSize} />
// ... que renderiza ...
<Link href={user.permalink}>
  <Avatar user={user} size={avatarSize} />
</Link>

* * *

### API Context
Es otro componente común y corriente que luego voy a agregar al árbol de componentes.

1-> Debo definir como luce o q información voy a guardar en el store.
 * * *
  export interface AuthState {

  }
 * * *

2-> Definir un Estado Inicial 
* * *
export const authInitialState: AuthState={
  isLoggedIn:false
}

3-> Crear el contexto 
* * *
 export const AuthContex= createContext()
 * * *
El valor que conlleva es el que el contexto va a brindarle a los hijos.
También se lo suele definir en una interfaz para tener su estructura.

4-> Exponer el provedor de información(del Estado)



React.CreateContext

Crea un objeto Context. Cuando React renderiza un componente que se suscribe a este objeto Context, este leerá el valor de contexto actual del Provider más cercano en el árbol.

* * *
const MyContext= React.createContext(defaulValue)
* * *

El argumento defaultValue es usado únicamente cuando un componente no tiene un Provider superior a él en el árbol. Este valor por defecto puede ser útil para probar componentes de forma aislada sin contenerlos. Nota: pasar undefined como valor al Provider no hace que los componentes que lo consumen utilicen defaultValue.

Context.Provider

* * *

<MyContext.Provider value={/* algún valor */}>

* * *

Cada objeto Context viene con un componente  Provider de React que permite que los componentes que lo consumen se suscriban a los cambios del contexto.

El componente Provider acepta una prop value que se pasará a los componentes consumidores que son descendientes de este Provider. Un Provider puede estar conectado a muchos consumidores. Los Providers pueden estar anidados para sobreescribir los valores más profundos dentro del árbol.


Todos los consumidores que son descendientes de un Provider se vuelven a renderizar cada vez que cambia la prop value del Provider. La propagación del Provider a sus consumidores descendientes (incluyendo .contextType y useContext) no está sujeta al método shouldComponentUpdate, por lo que el consumidor se actualiza incluso cuando un componente padre evita la actualización.

Los cambios se determinan comparando los valores nuevos y antiguos utilizando el mismo algoritmo que Object.is.

Class.contextType

* * *

class MyClass extends React.Component {
  componentDidMount() {
    let value = this.context;
    /* realiza un efecto secundario en el montaje utilizando el valor de MyContext */
  }
  componentDidUpdate() {
    let value = this.context;
    /* ... */
  }
  componentWillUnmount() {
    let value = this.context;
    /* ... */
  }
  render() {
    let value = this.context;
    /* renderiza algo basado en el valor de MyContext */
  }
}
MyClass.contextType = MyContext;

* * *

A la propiedad contextType en una clase se le puede asignar un objeto Context creado por React.createContext(). Al usar esta propiedad puedes consumir el valor actual más cercano de ese Context utilizando this.context. Puedes hacer referencia a ella en cualquiera de los métodos del ciclo de vida, incluida la función de renderizado.

Nota:

Solo puedes suscribirte a un solo Context usando esta API. Si necesitas leer más de una, lee Consumir múltiples Context.

Si estás utilizando la sintaxis experimental de campos de clase pública, puedes usar un campo de clase static para inicializar tu contextType.


REDUX-SAGA Implementación.


### FlatList vs ScrollView

ScrollView es un componente nativo de reacción que permite al usuario desplazarse por una lista de componentes. Es un componente de nivel superior que no representa ningún contenido visible, sino que delega la representación a uno de sus elementos secundarios. Generalmente se usa para mostrar una pequeña cantidad de contenido que no cambiará con frecuencia.

### Conviene FLATLIST.
FlatList también es un componente nativo de reacción que se usa para mostrar una lista de elementos. Es similar a ScrollView, pero es más eficiente porque usa una estructura de datos más eficiente en memoria para almacenar los elementos de la lista y solo muestra los elementos que están actualmente visibles en la pantalla.

Además, FlatList tiene la capacidad de realizar un desplazamiento infinito, donde el usuario puede seguir desplazándose y se cargarán nuevos elementos a medida que se acercan al final de la lista. Generalmente se usa para mostrar una gran cantidad de elementos que pueden cambiar con frecuencia, como una lista de resultados de búsqueda.

### Porque usarlo.
Aunque FlatList es un componente React Native incorporado que sirve como un contenedor desplazable genérico, FlatList representa solo aquellos elementos que se muestran actualmente en la pantalla. El valor predeterminado suele ser de 10 elementos. Como resultado de esto, no tiene ningún impacto en el rendimiento de la aplicación. Por lo tanto, cuando se trata de la visualización de grandes listas o conjuntos de datos, es preferible utilizar el componente FlatList.

### Cuando ScrollView
ScrollView carga todos los datos que se mostrarán en la pantalla a la vez, y esto se hace inmediatamente después de cargar el componente. Como resultado, todo el contenido (lista de datos) se monta por completo.

Ahora bien, si, por ejemplo, esta lista de datos contiene muchos elementos, esto provocará automáticamente problemas de rendimiento. Por lo tanto, no es preferible usar ScrollView si tiene cien o mil elementos para mostrar en la pantalla. Se usa cuando tiene menos elementos de datos en la lista de un tamaño limitado.

El proyecto 05 tiene peticiones simultaneas, axios,ruteo con y sin hook, pase de datos y tipados.

### Formik(Creación de forms) and Yup(validación de los mismos) para React-Native Paso a Paso

Para que comprenda la creación sencilla de formularios en React Native, crearé un formulario sencillo con campos de entrada de nombre, correo electrónico y contraseña.
En React Native, trabajar con los controles de entrada y la validación del formulario es un poco complicado. Aquí es donde entran Formik y Yup; Formik le permite crear formularios más rápido, mientras que Yup se encarga de la validación.


Formik es una biblioteca liviana y poderosa que lo ayuda con las 3 partes más inquietantes de la creación de formularios en react-native. También ayuda a mantener las cosas organizadas creando, probando y refactorizando sus formularios.

Yup es un generador de esquemas de JavaScript para el análisis y la validación de valores. Asigne un esquema, convierta un valor para que coincida, valide la forma de un valor existente o ambos.

Sí, los esquemas son increíblemente potentes y admiten el modelado de validaciones complejas e interdependientes o transformaciones de valores.


Manejo de envío de formularios

Validación y mensajes de error

Gestión de valores de formulario de estado de formulario

Pasos:

- Instalar paquetes Formik y Yup

* * *
yarn add formik yup

* * *

### Crear formulario en React Native con Formik

Ahora, vamos a crear un formulario básico utilizando el componente Formik. Abra su archivo App.js e importe el paquete formik en la parte superior del archivo de la aplicación.

* * *
// App.js
import React, { Component } from 'react';
import { TextInput, Text, Button, Alert, View, StyleSheet } from 'react-native';
import { Formik } from 'formik'

export default class App extends Component {
  render() {
    const inputStyle = {
      borderWidth: 1,
      borderColor: '#4e4e4e',
      padding: 12,
      marginBottom: 5,
    };
    return (
      <Formik
        initialValues={{ 
          name: '',
          email: '', 
          password: '' 
        }}
        onSubmit={values => Alert.alert(JSON.stringify(values))}
       >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <View style={styles.formContainer}>
            <TextInput
              value={values.name}
              style={inputStyle}
              onChangeText={handleChange('name')}
              onBlur={() => setFieldTouched('name')}
              placeholder="Name"
            />
            {touched.name && errors.name &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.name}</Text>
            }            
            <TextInput
              value={values.email}
              style={inputStyle}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              placeholder="E-mail"
            />
            {touched.email && errors.email &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.email}</Text>
            }
            <TextInput
              value={values.password}
              style={inputStyle}
              onChangeText={handleChange('password')}
              placeholder="Password"
              onBlur={() => setFieldTouched('password')}
              secureTextEntry={true}
            />
            {touched.password && errors.password &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.password}</Text>
            }
            <Button
              color="#3740FE"
              title='Submit'
              disabled={!isValid}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    );
  }
}
const styles = StyleSheet.create({
  formContainer: {
    padding: 50 
  }
});
console.disableYellowBox = true;

* * *

Formik controla el control de entradas con el evento handleChange().

También mantuvimos el botón deshabilitado cuando los campos del formulario no son válidos.

Aquí está el resultado del formulario React Native.

Ya hemos instalado Yup ahora. En este paso, aprenderemos a validar los controles de entrada de formulario utilizando el paquete Yup.

* * * 

<Formik
initialValues={{ 
  name: '',
  email: '', 
  password: '' 
}}
onSubmit={values => Alert.alert(JSON.stringify(values))}
validationSchema={yup.object().shape({
  name: yup
    .string()
    .required('Please, provide your name!'),
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(4)
    .max(10, 'Password should not excced 10 chars.')
    .required(),
})}
>

* * *

Configurar la propiedad ValidationSchema en Formik es fácil. El esquema permite que los controles de entrada se validen rápidamente.

Podemos validar rápidamente el control de entrada de correo electrónico, incluso puede configurar los mensajes personalizados con él.

Validar y administrar varios tipos de campos de entrada también es fácil con Yup.

Puede consultar todas las opciones de validación de formularios aquí.

Aquí está el código final que hemos colocado en el archivo App.js.

* * *

// App.js

import React, { Component } from 'react';
import { TextInput, Text, Button, Alert, View, StyleSheet } from 'react-native';
import * as yup from 'yup'
import { Formik } from 'formik'

export default class App extends Component {
  render() {
    const inputStyle = {
      borderWidth: 1,
      borderColor: '#4e4e4e',
      padding: 12,
      marginBottom: 5,
    };
    return (
      <Formik
        initialValues={{ 
          name: '',
          email: '', 
          password: '' 
        }}
        onSubmit={values => Alert.alert(JSON.stringify(values))}
        validationSchema={yup.object().shape({
          name: yup
            .string()
            .required('Please, provide your name!'),
          email: yup
            .string()
            .email()
            .required(),
          password: yup
            .string()
            .min(4)
            .max(10, 'Password should not excced 10 chars.')
            .required(),
        })}
       >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <View style={styles.formContainer}>
            <TextInput
              value={values.name}
              style={inputStyle}
              onChangeText={handleChange('name')}
              onBlur={() => setFieldTouched('name')}
              placeholder="Name"
            />
            {touched.name && errors.name &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.name}</Text>
            }            
            <TextInput
              value={values.email}
              style={inputStyle}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              placeholder="E-mail"
            />
            {touched.email && errors.email &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.email}</Text>
            }
            <TextInput
              value={values.password}
              style={inputStyle}
              onChangeText={handleChange('password')}
              placeholder="Password"
              onBlur={() => setFieldTouched('password')}
              secureTextEntry={true}
            />
            {touched.password && errors.password &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.password}</Text>
            }
            <Button
              color="#3740FE"
              title='Submit'
              disabled={!isValid}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    );
  }
}
const styles = StyleSheet.create({
  formContainer: {
    padding: 50 
  }
});
console.disableYellowBox = true;
* * *

--- Demo 2---

### Pasos
1-Importar el hook useFormik from 'formik' al principio del archivo a utilizar.(Se utilizara para crear una instancia de Formik con todos los estados y ayudante(helpers) que se necesiten)

2- El hook useFormik acepta como parametro un objeto de configuraciones. Estas se pueden usar para modificar y dar forma a su formulario según las necesidades.

3-Se pasaran las siguientes propiedades en esta demo:

a-InitialValues: Incluye los campos del formulario y sus valores iniciales.

b-validationSchema: Un esquema Yup para validar los campos.

c- onSubmit: Una función para ejecutar cuando se envía el formulario.

Tanto Los valores iniciales como la función onSubmit son obligatorias.

Como puede ver, establece el valor de la propiedad initialValues ​​en un objeto. Las claves de este objeto son los nombres de los campos del formulario. Sus valores son el valor inicial.

* * *
import React from 'react';
import {Formik} from 'formik';
import {Button, Text, TextInput, View} from 'react-native';

const FormFormik = () => {
  return (
    <>
      <Text>Registrate Ahora ! </Text>
      <Formik
        initialValues={{name: '', email: '', password: ''}}

        onSubmit={values => console.log(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <TextInput
              placeholder="Name"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            <TextInput
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <TextInput
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </>
  );
};
export default FormFormik;

  * * *

En la función onSubmit, recibe el objeto de valores como parámetro. Aquí puede acceder a los valores y usarlos para guardarlos en la base de datos o enviarlos a un servidor. 

Tener en cuenta que la función onSubmit solo se ejecuta una vez que se valida el formulario. Por lo tanto, no necesita realizar ninguna validación dentro de esta función

Ahora, puede usar la variable formik para crear un formulario, vincular sus campos a los campos que definió en useFormik, vincular la validación y vincular el controlador de envío.

formik incluye las siguientes propiedades entre otras:

1-handleSubmit: la función de envío que debe llamarse cuando se envía el formulario. Esto generalmente se asigna al controlador de eventos onSubmit de elementos de formulario.

2-errores: Un objeto que tiene los nombres de campo como propiedades y el valor de cada uno es el mensaje de error resultante de validar ese campo si hay algún error.

3-touched: Un objeto que tiene los nombres de los campos como propiedades y el valor es un booleano que indica si el usuario ha interactuado con el campo o no.

4-values: un objeto que tiene los nombres de campo como propiedades y el valor de cada uno es el valor actual de ese campo. Por lo general, se usa para establecer la propiedad de valor de los elementos de entrada.

5-handleChange: una función que debe usarse como controlador del evento de cambio de elementos de entrada. Se pasa como el valor de la propiedad onChange de los elementos.

6-handleBlur: una función que debe usarse como controlador del evento de desenfoque de los elementos de entrada. Se pasa como el valor de la propiedad onBlur de los elementos.


### Agregando Yup a Formik.

Agregar validaciones Yup y accesorios TextInput
Agregamos algunos campos por ahora, así que establezcamos una lógica de validación para cada uno de ellos.

Comience importando Yup en un archio externo para configurar el esquema.

* * *
import * as Yup from 'yup';
* * *


Luego definimos un esquema de validación para los campos.
Se puede crear un archivo con el nombre validationSchema
* * *
const validationSchema = Yup.object().shape({
name: Yup.string().required('Name is required').label('Name'),
email: Yup.string()
.email('Please enter valid email')
.required('Email is required')
.label('Email'),
password: Yup.string()
.matches(/\w*[a-z]\w*/, 'Password must have a small letter')
.matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
.matches(/\d/, 'Password must have a number')
.min(8, ({min}) => `Password must be at least ${min} characters`)
.required('Password is required')
.label('Password'),
});

* * *
Luego este archivo lo importamos en el form de native y
lo agregamos a Formik con una propiedad llamada
validationSchema={validationSchema}

Luego, mostraremos los mensajes de error usando la propiedad 'errores'. Por ahora, agreguemos un componente <Text> después de cada campo.
* * *
<TextInput
placeholder="Name"
onChangeText={handleChange('name')}
onBlur={handleBlur('name')}
value={values.name}
/>
<Text style={{color: 'red'}}>{errors.name}</Text>
* * *

Sin embargo, no queremos mostrar estos errores cada vez, solo cuando hay un error y si se toca el campo. Envolveremos nuestro componente de texto con algún código ES6 y solo lo renderizaremos si se cumplen las condiciones mencionadas anteriormente.

* * *
{errors.name && touched.name && (
<Text style={{color: 'red'}}>{errors.name}</Text>
)}
* * *

Ahora, puede notar que la contraseña no está oculta como esperábamos. Necesitamos pasar el accesorio secureTextEntry a TextInput para que eso suceda. También pasaremos algunos otros accesorios para que nuestro TextInput se comporte correctamente.

El resultado final queda debajo. 
* * *
import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {Formik, Field} from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
name: Yup.string().required('Name is required').label('Name'),
email: Yup.string()
.email('Please enter valid email')
.required('Email is required')
.label('Email'),
password: Yup.string()
.matches(/\w*[a-z]\w*/, 'Password must have a small letter')
.matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
.matches(/\d/, 'Password must have a number')
.min(8, ({min}) => `Password must be at least ${min} characters`)
.required('Password is required')
.label('Password'),
});
const SignUpForm = () => {
return (
<>
<Text>Sign Up</Text>
<Formik
initialValues={{name: '', email: '', password: ''}}
validationSchema={validationSchema}
onSubmit={values => console.log(values)}>
{({
handleChange,
handleBlur,
handleSubmit,
values,
errors,
touched,
}) => (
<View>
<TextInput
placeholder="Name"
onChangeText={handleChange('name')}
onBlur={handleBlur('name')}
value={values.name}
autoCorrect={false}
/>
{errors.name && touched.name && (
<Text style={{color: 'red'}}>{errors.name}</Text>
)}
<TextInput
placeholder="Email"
onChangeText={handleChange('email')}
onBlur={handleBlur('email')}
autoCapitalize="none"
autoCompleteType="email"
autoCorrect={false}
keyboardType="email-address"
textContentType="emailAddress"
value={values.email}
/>
{errors.email && touched.email && (
<Text style={{color: 'red'}}>{errors.email}</Text>
)}
<TextInput
placeholder="Password"
onChangeText={handleChange('password')}
onBlur={handleBlur('password')}
autoCapitalize="none"
secureTextEntry
textContentType="password"
value={values.password}
/>
{errors.password && touched.password && (
<Text style={{color: 'red'}}>{errors.password}</Text>
)}
<Button onPress={handleSubmit} title="Submit" />
</View>
)}
</Formik>
</>
);
};
export default SignUpForm;
* * *
* * *
# Preparar presentación Formik & Yup




