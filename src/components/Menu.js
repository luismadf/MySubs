import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <ul className="menu_ul">
        <li>Todas</li>
        <li>Mes</li>
        <li>Año</li>
        <li>Pagadas</li>
        <li>Sin Pagar</li>
      </ul>
      <Link to={"/new"}>
        <i class="fas fa-plus-square"></i>
      </Link>
    </div>
  );
};

export default Menu;
