import React, { useState } from "react";
import { ListStyle, ListItemStyle, LinkStyle } from "./Style";
import Submenu from "../Blocks/A1_HeaderNav/Submenu";
function CastomLinks(props) {
  const { linkArray } = props;

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(Array(linkArray.length).fill(false));

  const handleLinkMouseEnter = (index) => {
    const updatedSubMenuOpen = [...isSubMenuOpen];
    updatedSubMenuOpen[index] = true;
    setIsSubMenuOpen(updatedSubMenuOpen);
  };
  const handleLinkMouseLeave = (index) => {
    const updatedSubMenuOpen = [...isSubMenuOpen];
    updatedSubMenuOpen[index] = false;
    setIsSubMenuOpen(updatedSubMenuOpen);
  };

  return (
    <ListStyle {...props.ListStyle}>
      {linkArray.map((link, index) => {
        const uniqueId = `link-${index}`;
        return (
          <ListItemStyle
            {...props.ListItemStyle}
            key={uniqueId}
            onMouseEnter={() => handleLinkMouseEnter(uniqueId)}
            onMouseLeave={() => handleLinkMouseLeave(uniqueId)}
          >
            <LinkStyle {...props.LinkStyle} href={link.url} id={uniqueId}>
              {link.text}
            </LinkStyle>
            {isSubMenuOpen[uniqueId] && <Submenu />}
          </ListItemStyle>
        );
      })}
    </ListStyle>
  );
}

export default CastomLinks;
