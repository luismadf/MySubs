import React from "react";

const Register = () => {
  return (
    <main>
      <div className="login_title">
        <h3>Registro</h3>
        <p>Inicia sesión y comienza a gestionar tus suscripciones</p>
      </div>
      <form action="">
        <div className="form_field">
          <label htmlFor="">Nombre de usuario</label>
          <input type="text" name="" id="" />
        </div>
        <div className="form_field">
          <label htmlFor="">Email</label>
          <input type="email" name="" id="" />
        </div>
        <div className="form_field">
          <label htmlFor="">Password</label>
          <input type="password" name="" id="" />
        </div>
        <div className="form_field">
          <label htmlFor="">Sueldo al mes</label>
          <input type="number" name="" id="" />
        </div>
        <div className="form_conditions">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Acepto la Política de privacidad</label>
        </div>
        <button type="submit" className="button secondary_button button_active">
          REGISTRARSE
        </button>
      </form>
    </main>
  );
};

export default Register;
