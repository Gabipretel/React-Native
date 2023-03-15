import { useEffect, useState, useRef } from "react";
import { reqResApi } from "../api/reqResApi";
import { ReqResLista, Usuario } from "../interface/reqRes.interface";

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  let paginaRef = useRef(1);

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    const resp = await reqResApi.get<ReqResLista>("/users", {
      params: {
        page: paginaRef.current 
      },
    });
    
    if(resp.data.data.length > 0){
        setUsuarios(resp.data.data)
       
       
    }else{
        paginaRef.current--
        alert('No hay mas registros.')
    }
  }

  const paginaSiguiente =()=>{
    paginaRef.current++
    cargarUsuarios()
    
  }

  const paginaAnterior =()=>{
    if(paginaRef.current > 1){
      paginaRef.current--
      cargarUsuarios()
    }
  }

    return {
      usuarios,
      paginaAnterior,
      paginaSiguiente
    }
}


