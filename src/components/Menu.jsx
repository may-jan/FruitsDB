import React from "react";
import { Link } from "react-router-dom";
import "../style/Menu.scss";

const Menu = () => {
  return (
    <div className="Menu">
      <div className="title">FRUIT DB🍇</div>
      <div className="menu_wrap">
        <Link to="/">Home</Link>
        <Link to="/list">리스트</Link>
        <Link to="/addform">추가</Link>
      </div>
    </div>
  );
};

export default Menu;
