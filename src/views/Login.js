import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { userAuthAction } from "../actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import svg from "../img/Rectangle44.svg";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.users.auth);

  useEffect(() => {
    if (auth) {
      history.push("/main");
    }
  }, [auth]);

  const [user, setUser] = useState({ email: "", password: "" });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      console.log("Todos los campos son obligatorios", "alerta-error");
      return;
    }
    dispatch(userAuthAction(user));
  };

  return (
    <main>
      <div className="login_main">
        <div className="login_title">
          <h3>Iniciar sesión</h3>
          <p>Inicia sesión y comienza a gestionar tus suscripciones</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form_field">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={email} onChange={onChange} />
          </div>
          <div className="form_field">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="form_conditions">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Recordar Contraseña</label>
          </div>
          <button
            type="submit"
            className="button secondary_button button_active"
          >
            INICIAR SESIÓN
          </button>
        </form>
      </div>
      <div className="svg_hero">
        <img src={svg} alt="" />
      </div>
    </main>
  );
};

export default Login;
