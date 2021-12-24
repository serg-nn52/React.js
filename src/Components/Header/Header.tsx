import React from "react";
import logo from "./logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a href="#id" className="header__logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="header__official">
          Официальный представитель
          <br />
          <span>Garmin, Polar, Suunto</span>
        </div>
        <div className="header__contacts">
          <a href="tel:+74999228974" className="header__phone">
            +7 (499) 922-89-74
          </a>
          <button type="button" className="button">
            заказать звонок
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
