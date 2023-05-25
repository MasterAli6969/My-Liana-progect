import React, { useState } from "react";
import {
  ListStyle,
  ListItemStyle,
  LinkStyle,
} from "../../A1_Castom_Components/Style";
import Submenu from "./Submenu";
function NavDesktop() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(Array(4).fill(false));

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

  const StyleList = {
    display: "flex",
    margin: "0 15px 0 0",
  };
  const StyleListItem = {
    listStyleType: "none",
    margin: "0 0 0 40px",
  };
  const StyleLink = {
    textTransform: "uppercase",
    textDecoration: "none",
    color: "white",
    fontWeight: "normal",
    fontSize: "80%",
  };

  return (
    <>
      <ListStyle {...StyleList}>
        <ListItemStyle
          {...StyleListItem}
          onMouseEnter={()=>handleLinkMouseEnter(0)}
          onMouseLeave={()=>handleLinkMouseLeave(0)}
        >
          <LinkStyle {...StyleLink} href="#">
            Home
          </LinkStyle>
          {isSubMenuOpen[0] && <Submenu />}
        </ListItemStyle>
        <ListItemStyle
          {...StyleListItem}
          onMouseEnter={()=>handleLinkMouseEnter(1)}
          onMouseLeave={()=>handleLinkMouseLeave(1)}
        >
          <LinkStyle {...StyleLink} href="#">
            About
          </LinkStyle>
          {isSubMenuOpen[1] && <Submenu />}
        </ListItemStyle>
        <ListItemStyle
          {...StyleListItem}
          onMouseEnter={()=>handleLinkMouseEnter(2)}
          onMouseLeave={()=>handleLinkMouseLeave(2)}
        >
          <LinkStyle {...StyleLink} href="#">
            Contact
          </LinkStyle>
          {isSubMenuOpen[2] && <Submenu />}
        </ListItemStyle>
        <ListItemStyle
          {...StyleListItem}
          onMouseEnter={()=>handleLinkMouseEnter(3)}
          onMouseLeave={()=>handleLinkMouseLeave(3)}
        >
          <LinkStyle {...StyleLink} href="#">
            Contact
          </LinkStyle>
          {isSubMenuOpen[3] && <Submenu />}
        </ListItemStyle>
      </ListStyle>
    </>
  );
}

export default NavDesktop;
