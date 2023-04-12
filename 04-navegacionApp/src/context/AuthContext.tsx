import React, { createContext, useReducer } from 'react'
import { authReducer } from './AuthReducer';

//Información que debe tener
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado Inicial
export const authInitialState: AuthState = {
    isLoggedIn: false
}

//Creamos la interfaz de lo que se expone en el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavIcon: (iconName: string) => void;
    logOut: ()=>void;
    changeUsername: (username: string)=>void;
}

// Crear contexto
//  export const AuthContex= createContext<AuthContextProps>({})
export const AuthContext = createContext({} as AuthContextProps)


// Componente proveedor del Estado



export const AuthProvider = ({ children }: { children: JSX.Element }) => {


    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = () => {
        dispatch({ type: 'signIn' })
    }
    const changeFavIcon = (iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName })
    }

    const logOut =()=>{
        dispatch({type:'logout'})
    }

    const changeUsername =( username: string )=>{
        dispatch({type:'changeUsername',payload:username})
    }


    return (
        <AuthContext.Provider value={{
            authState: authState,
            signIn,
            changeFavIcon,
            logOut,
            changeUsername
        }}>
            {children}
        </AuthContext.Provider>
    )
}

