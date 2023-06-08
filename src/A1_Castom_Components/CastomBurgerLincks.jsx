import React, { useState } from "react";

function CastomBurgerLincks(props) {
  const {
    linkArray,
    castomUlStyle,
    castomLiStyle,
    castomAStyle,
    castomSpanStyle,
  } = props;
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
    <ul className={`${castomUlStyle}`}>
      {linkArray.map((link, index) => {
        const isLinkActive = activeSubMenu === index;
        return (
          <li
            className={` ${castomLiStyle}`}
            onClick={() => handleOnClick(index)}
            key={index}
          >
            <a className={` ${castomAStyle}`} href={link.url}>
              {link.text}
            </a>{" "}
            <span className={` ${castomSpanStyle}`}></span>
            {isLinkActive && link.submenu && <div>{link.submenu}</div>}
          </li>
        );
      })}
    </ul>
  );
}

export default CastomBurgerLincks;
