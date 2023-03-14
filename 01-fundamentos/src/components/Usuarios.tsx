import { useEffect, useState, useRef } from "react";
import { reqResApi } from "../api/reqResApi";
import { ReqResLista, Usuario } from "../interface/reqRes.interface";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  let paginaRef = useRef(0);

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
        paginaRef.current++
    }else{
        alert('No hay mas registros.')
    }
  };

  const renderItemUsuario = (usuario: Usuario) => {
    const { first_name, last_name, avatar, email, id } = usuario;
    return (
      <tr key={id}>
        <th>
          {" "}
          <img
            src={avatar}
            alt={first_name}
            style={{ borderRadius: 100, width: 35 }}
          />
        </th>
        <th>
          {first_name} {last_name}
        </th>
        <th>{email}</th>
      </tr>
    );
  };

  return (
    <>
      <h3 className="p-4">Usuarios</h3>
      <table className="table table-dark ">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map((usuario) => renderItemUsuario(usuario))}</tbody>
      </table>
      <button className="btn btn-outline-primary" onClick={cargarUsuarios}>
        Siguiente
      </button>
    </>
  );
};

export default Usuarios;
