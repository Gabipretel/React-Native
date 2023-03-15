import { useState } from "react";

const Formularios = () => {
  const [formulario, setFormulario] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (value: string, campo: string) => {
    setFormulario({
      ...formulario,
      [campo]: value,
    });
  };

  return (
    <>
      <h3>Formularios</h3>
      <div className="mt-3 mb-3">
        <label className="form-label">Email</label>
        <input
          className="form-control"
          type="text"
          placeholder="Email"
          value={formulario.email}
          onChange={(e) => handleOnChange(e.target.value, "email")}
        />
      </div>
      <div className="mt-3 mb-3">
        <label className="form-label">Password</label>
        <input
          className="form-control"
          type="password"
          placeholder="Password"
          value={formulario.password}
          onChange={(e) => handleOnChange(e.target.value, "password")}
        />
      </div>
    </>
  );
};

export default Formularios;
