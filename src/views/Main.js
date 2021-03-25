import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Menu from "../components/Menu";
import Suscription from "../components/Suscription";
import Modal from "../components/Modal";

const Main = () => {
  const activeModal = useSelector((state) => state.suscriptions.modal);
  const suscriptions = useSelector((state) => state.suscriptions.suscriptions);

  return (
    <div className="main_background">
      <div className={activeModal ? "modal_background" : null}></div>
      <main className="principal_main">
        <div className="principal_info">
          <h2>User Name</h2>
          <p>555$ / mes</p>
          <p>24 Suscripciones</p>
        </div>
        <Menu />
        <div className="main_suscriptions">
          {suscriptions.map((suscription) => (
            <Suscription suscription={suscription} />
          ))}
          {activeModal ? <Modal /> : null}
        </div>
      </main>
    </div>
  );
};

export default Main;
