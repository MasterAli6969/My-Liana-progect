import { useState } from "react";

function SetCastomLinck(props) {
  const { linkArray, customClass} = props;
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <ul className={`${customClass.castomUlStyle}`}>
      {linkArray.map((link, index) => {
        const isLinkActive = activeIndex === index;
        return (
          <li
            className={` ${customClass.castomLiStyle}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            key={index}
          >
            <a className={` ${customClass.castomAStyle}`}  href={link.url}>
              {link.text}
            </a>
            {isLinkActive && link.submenu && <div>{link.submenu}</div>}
          </li>
        );
      })}
    </ul>
  );
}

export default SetCastomLinck;
