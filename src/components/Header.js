import React from "react";
import { Link, useHistory } from "react-router-dom";
import arrow from "../img/Arrow2.svg";

const Header = () => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <nav>
      <img src={arrow} alt="Go back" onClick={() => handleClick()} />
      <h1 className="title_header">
        <Link to={"/"}>MySubs</Link>
      </h1>
      <i class="fas fa-comment-alt"></i>
    </nav>
  );
};

export default Header;
