import React from "react";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/main");
  };

  return (
    <main className="login_main">
      <div className="login_title">
        <h3>Iniciar sesión</h3>
        <p>Inicia sesión y comienza a gestionar tus suscripciones</p>
      </div>
      <form>
        <div className="form_field">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
        </div>
        <div className="form_field">
          <label htmlFor="">Password</label>
          <input type="password" name="" id="" />
        </div>
        <div className="form_conditions">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Recordar Contraseña</label>
        </div>
        <button
          type="submit"
          className="button secondary_button button_active"
          onClick={() => handleClick()}
        >
          INICIAR SESIÓN
        </button>
      </form>
    </main>
  );
};

export default Login;
