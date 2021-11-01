import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import svg from "../img/Rectangle41.svg";

const HomeMain = styled.main`
  background: url({svg});
`;
const HomeContainer = styled.div`
  position: relative;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 90vh;
  z-index: 2;
  color: white;

  .home_buttons-link {
    margin-top: 30px;
    text-decoration: none;
    color: #777777;
    font-weight: 500;
  }

  p {
    display: block;
    width: 70%;
    margin-top: 60px;
    text-align: center;
    font-size: 24px;
  }

  .home_buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .home_hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .home_hero-title {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      h2 {
        font-family: "Oswald", sans-serif;
        font-size: 40px;
        font-weight: 400;
      }

      p {
        font-family: "Slabo 27px", serif;
        font-size: 40px;
        font-weight: 400;
        margin: 0;
      }
    }
  }
`;

const SvgContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 65%;
  z-index: 1;

  img {
    height: 100%;
  }
`;

const Home = () => {
  return (
    <HomeMain>
      <HomeContainer>
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
      </HomeContainer>
      {/*  <SvgContainer>
        <img src={svg} alt="Background SVG" />
      </SvgContainer> */}
    </HomeMain>
  );
};

export default Home;
