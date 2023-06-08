import React, { useState, useEffect } from "react";
import HeaderNavDesktop from "./HeaderNav/HeaderNavDesktop";
import HeaderBurgerNav from "./HeaderBurgerNav/HeaderBurgerNav";
function HeaderDesktopAndMobileBurgerMenu() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const heandleSkreen = () => {
      setIsSmallScreen(window.innerWidth <= 900);
    };
    window.addEventListener("resize", heandleSkreen);
    heandleSkreen();
    return () => {
      window.removeEventListener("resize", heandleSkreen);
    };
  }, []);
  return <>{isSmallScreen ? <HeaderBurgerNav /> : <HeaderNavDesktop />}</>;
}

export default HeaderDesktopAndMobileBurgerMenu;