import { useEffect, useReducer } from "react";

interface AuthState {
  validate: boolean;
  token: string | null;
  userName: string;
  name: string;
}

const initialState: AuthState = {
  validate: true,
  token: null,
  userName: "",
  name: "",
};

type LoginPayload= {userName:string, name: string}
type AuthAction = { type: 'logout' } | {type: 'login', payload:LoginPayload};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validate: false,
        token: null,
        userName: "",
        name: "",
      };
    
    case "login":
        const {userName,name}= action.payload
        return {
            validate: false,
            token:'AGASDASDASD1223413',
            userName, 
            name
        }
    default:
      return state;
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 2000);
  }, []);

  const login =()=>{
    dispatch({type:'login', payload: {
        name: 'Gabriel Pretel',
        userName: 'Gabo'
    }})
  }
  const logOut =()=>{
    dispatch({type:'logout'})
  }

  if (state.validate) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validando...</div>
      </>
    );
  }

  return (
    <>
      {state.token ? (
        <>
          <div className="alert alert-success">
            Autenticado como {state.userName}
          </div>
          <div className="p-4">
            <button className="btn btn-danger m-3" onChange={()=>{logOut()}}>Logout</button>
          </div>
        </>
      ) : (
        <>
          <div className="alert alert-danger">Usuario no autenticado</div>
          <div className="p-4">
            <button className="btn btn-success m-3" onChange={()=>login()} >Login</button>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
