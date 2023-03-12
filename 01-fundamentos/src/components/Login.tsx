import { useReducer } from "react"


interface AuthState{
    validate: boolean;
    token: string | null;
    userName: string;
    name: string
}

const initialState:AuthState ={
    validate: true,
    token: null,
    userName: '',
    name: ''
}

type AuthAction ={ type: 'logout'}

const authReducer = (state:AuthState,action:AuthAction):AuthState=>{
    return {
      ...initialState
    }
}

const Login = () => {

    const [state, dispatch] = useReducer(authReducer, initialState)

  return (
    <>
    <h3>Login</h3>
    <div className="alert alert-info">
        Validando...
    </div>
    <div className="alert alert-danger">
        No autenticado..
    </div>
    <div className="alert alert-success">
        Autenticado!
    </div>
    <div className="p-4">
    <button className="btn btn-success m-3">Login</button>
    <button className="btn btn-danger m-3">Logout</button>
    </div>
    </>

  )
}

export default Login