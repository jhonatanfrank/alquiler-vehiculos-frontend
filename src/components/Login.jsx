import React, { useState } from "react";

import appFirebase from "../credenciales";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(appFirebase);

const Login = () => {
  const [registro, setRegistro] = useState(false);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    if (registro) {
      await createUserWithEmailAndPassword(auth, correo, contraseña);
    } else {
      await signInWithEmailAndPassword(auth, correo, contraseña);
    }
  };

  return (
    <>
      <div>
        <h1>{registro ? "registrate" : "inicia sesion bro"}</h1>
        <form onSubmit={handlerSubmit}>
          <div className="mb-3">
            <label className="form-label">Email addres</label>
            <input
              type="email"
              className="form-control"
              placeholder="Ingresar email"
              id="email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Ingresar contraseña"
              id="password"
              required
            />
          </div>
          <button className="mb-3">
            {registro ? "registrate" : "inicia sesion"}
          </button>
        </form>
        <div>
          <button onClick={() => setRegistro(!registro)}>
            {registro
              ? "ya tienes una cuenta? inicia sesion"
              : "no tienes cuenta? registrate"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
