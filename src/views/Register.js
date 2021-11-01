import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUserAction } from "../actions/userActions";
import styled from "@emotion/styled";
import svg from "../img/Rectangle44.svg";

const RegisterContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const SvgContainer = styled.div`
  position: absolute;
  top: -15px;
  right: 0;
  width: 100%;
  height: 100vh;
  img {
    height: 100%;
  }
`;

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    lastname: "default",
  });
  const [accept, setAccept] = useState(false);

  const dispatch = useDispatch();

  const { email, name, password } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const isAccepted = (answer) => {
    setAccept(answer);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "" || name.trim() === "" || password.trim() === "") {
      console.log("Todos los campos son obligatorios");
      return;
    } else if (!accept) {
      console.log("Debes aceptar las condiciones");
      return;
    }

    dispatch(registerUserAction(user));
  };

  return (
    <main>
      <RegisterContainer>
        <div className="login_title">
          <h3>Registro</h3>
          <p>Inicia sesión y comienza a gestionar tus suscripciones</p>
        </div>
        <form onSubmit={onSubmit}>
          <div className="form_field">
            <label htmlFor="">Nombre de usuario</label>
            <input type="text" name="name" onChange={onChange} />
          </div>
          <div className="form_field">
            <label htmlFor="">Email</label>
            <input type="email" name="email" onChange={onChange} />
          </div>
          <div className="form_field">
            <label htmlFor="">Password</label>
            <input type="password" name="password" onChange={onChange} />
          </div>
          <div className="form_field">
            <label htmlFor="">Sueldo al mes</label>
            <input type="number" name="" id="" />
          </div>
          <div className="form_conditions">
            <input
              type="checkbox"
              name=""
              onChange={(e) =>
                e.target.checked ? isAccepted(true) : isAccepted(false)
              }
            />
            <label htmlFor="">Acepto la Política de privacidad</label>
          </div>
          <button
            type="submit"
            className="button secondary_button button_active"
          >
            REGISTRARSE
          </button>
        </form>
      </RegisterContainer>

      <SvgContainer>
        <img src={svg} alt="Background SVG" />
      </SvgContainer>
    </main>
  );
};

export default Register;
