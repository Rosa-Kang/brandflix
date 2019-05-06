import React from "react";
import Mohan from "../Assets/Images/Mohan-muruge.jpg";
import Logo from "../Assets/Logo/Logo-brainflix.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} />
      </div>
      <div className="header__toRight">
        <input className="header__search" placeholder="Search" />
        <div className="header__right">
          <button className="header__right--button" type="button" name="upload">
            UPLOAD
          </button>
          <img className="header__right--Mohan" src={Mohan} />
        </div>
      </div>
    </header>
  );
}

export default Header;
