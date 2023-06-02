import { useState } from "react";

function SetCastomLinck(props) {
  const { linkArray, ulStyle, liStyle, aStyle } = props;
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <ul className={`ulStyle ${ulStyle}`}>
      {linkArray.map((link, index) => {
        const isLinkActive = activeIndex === index;
        return (
          <li
            className={`liStyle ${liStyle}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            {...props.ListItemStyle}
            key={index}
          >
            <a className={`aStyle ${aStyle}`} href={link.url}>
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
