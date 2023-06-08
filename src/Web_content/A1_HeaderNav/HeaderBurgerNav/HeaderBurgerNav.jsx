import React, { useState } from "react";
import "./HeaderBurgerNav.css";
import BurgerIcon from "./BurgerIcon";
import HeaderBurgerNavMobile from "./HeaderBurgerNavMobile";
import Logo from "../HeaderNav/Logo";
import "../HeaderNav/HeaderNavStyle.css";
function HeaderBurgerNav() {
  const [burgerActive, setBugrerActive] = useState(false);

  const handleBurgerClick = () => {
    setBugrerActive(!burgerActive);
  };

  return (
    <div className="navConteiner">
      <Logo />
      <BurgerIcon onClick={handleBurgerClick} />
      {burgerActive && <HeaderBurgerNavMobile />}
    </div>
  );
}
export default HeaderBurgerNav;
