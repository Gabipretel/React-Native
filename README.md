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


