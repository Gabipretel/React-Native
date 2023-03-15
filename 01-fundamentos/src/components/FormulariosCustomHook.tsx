import { useForm } from "../hooks/useForm";

const FormulariosCustomHook = () => {

  const {email,password,handleOnChange}=useForm({
    email: "",
    password: "",
  })

  return (
    <>
      <h3>Formularios</h3>
      <div className="mt-3 mb-3">
        <label className="form-label">Email</label>
        <input
          className="form-control"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => handleOnChange(e.target.value, "email")}
        />
      </div>
      <div className="mt-3 mb-3">
        <label className="form-label">Password</label>
        <input
          className="form-control"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => handleOnChange(e.target.value, "password")}
        />
      </div>
    </>
  );
};

export default FormulariosCustomHook;
