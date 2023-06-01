import React, { useState } from "react";
import CastomList from "../../A1_Castom_Components/CastomList";
import HomeSubMenu from "./HomeSubMenu";
import PortfolioSubMenu from "./PortfolioSubMenu";
import BlogSubMenu from "./BlogSubMenu";
import PagesSubMenu from "./PagesSubMenu";
function HearedNavDesktopMenu() {
  const [displayBlock, setDisplayBlock] = useState("none");
  const handleMouseEnter = (id) => {
    setDisplayBlock(id);
    console.log();
  };

  const handleMouseLeave = () => {
    setDisplayBlock("none");
  };
  const NavDesktopArray = [
    {
      id: "0",
      url: "#",
      text: "home",
      submenu: displayBlock === "0" && <HomeSubMenu display="block" />,
    },
    {
      id: "1",
      url: "#",
      text: "portfolio",
      submenu: displayBlock === "1" && <PortfolioSubMenu display="block" />,
    },
    {
      id: "2",
      url: "#",
      text: "blog",
      submenu: displayBlock === "1" && <BlogSubMenu display="block" />,
    },
    {
      id: "3",
      url: "#",
      text: "pages",
      submenu: displayBlock === "1" && <PagesSubMenu display="block" />,
    },
  ];

  const StyleList = {
    display: "flex",
    margin: "0 0 0 0",
  };
  const StyleListItem = {
    listStyleType: "none",
    margin: "0 0 0 10%",
  };
  const StyleLink = {
    textTransform: "uppercase",
    textDecoration: "none",
    fontWeight: "normal",
    color: "white",
    fontSize: "",
    margin: "0 0 0 0",
    cursor: "pointer",
  };
  return (
    <CastomList
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      linkArray={NavDesktopArray}
      ListStyle={StyleList}
      ListItemStyle={StyleListItem}
      LinkStyle={StyleLink}
    />
  );
}

export default HearedNavDesktopMenu;
