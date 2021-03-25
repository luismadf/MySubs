import React from "react";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const handleClick = () => {
    console.log("Funciona");
    history.goBack();
  };

  return (
    <nav>
      <button
        className="not_button"
        type="submit"
        onClick={() => handleClick()}
      >
        <i class="fas fa-long-arrow-alt-left"></i>
      </button>
      <h1 className="title_header">
        <Link to={"/"}>MySubs</Link>
      </h1>
      <i class="fas fa-comment-alt"></i>
    </nav>
  );
};

export default Header;
