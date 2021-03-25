import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <div className="home_hero">
        <div className="home_hero-title">
          <p>Bienvenido a</p>
          <h2>MySubs</h2>
        </div>
        <p>La app que te ayuda a gestionar y no olvidar tus suscripciones</p>
      </div>
      <div className="home_buttons">
        <Link to={"/login"} className="button main_button button_active">
          iniciar sesión
        </Link>
        <Link to={"/register"} className="button main_button">
          registrarme
        </Link>
        <Link className="home_buttons-link">Quiero probar la app</Link>
      </div>
    </main>
  );
};

export default Home;
