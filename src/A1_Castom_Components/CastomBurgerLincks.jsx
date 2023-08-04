import React, { useState } from "react";

function CastomBurgerLincks(props) {
  const { linkArray, customClass } = props;
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const handleOnClick = (index) => {
    setActiveSubMenu((prevState) => {
      if (prevState === index) {
        return null;
      } else {
        return index;
      }
    });
  };
  return (
    <ul className={`${customClass.castomUlStyle}`}>
      {linkArray.map((link, index) => {
        const isLinkActive = activeSubMenu === index;
        const arrowActive = isLinkActive ? "arrowActive" : "";
        return (
          <li
            className={` ${customClass.castomLiStyle}`}
            onClick={() => handleOnClick(index)}
            key={index}
          >
            <a className={` ${customClass.castomAStyle}`} href={link.url}>
              {link.text}
            </a>{" "}
            <span
              className={` ${customClass.castomSpanStyle} ${arrowActive}`}
            ></span>
            {isLinkActive && link.submenu && <div>{link.submenu}</div>}
          </li>
        );
      })}
    </ul>
  );
}

export default CastomBurgerLincks;
