import React, { useState } from "react";
import "./HeaderBurgerNav.css";
import BurgerIcon from "./BurgerIcon";
import HeaderBurgerNavMobile from "./HeaderBurgerNavMobile";

function HeaderBurgerNav() {
  const [burgerActive, setBugrerActive] = useState(false);
  
  const handleBurgerClick = () => {
    setBugrerActive(!burgerActive);
  };
  
  return (
    <>
      <BurgerIcon onClick={handleBurgerClick} />
      {burgerActive && <HeaderBurgerNavMobile />}
    </>
  );
}

export default HeaderBurgerNav;
