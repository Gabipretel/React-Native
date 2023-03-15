import {useUsuarios} from '../hooks/useUsuarios'
import {Usuario} from '../interface/reqRes.interface'

const UsuariosCustomHook = () => {
  const {usuarios,paginaAnterior,paginaSiguiente}= useUsuarios()

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
      <button className="btn btn-outline-primary m-3" onChange={paginaAnterior}>
        Anteriores
      </button>
      <button className="btn btn-outline-primary m-3" onChange={paginaSiguiente}>
        Siguiente
      </button>
    </>
  );
};

export default UsuariosCustomHook;
