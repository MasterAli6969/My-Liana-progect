import React, { useState } from "react";
import CastomList from "../../../A1_Castom_Components/CastomList";
import {
  HomeSubMenu,
  PortfolioSubMenu,
  PagesSubMenu,
  BlogSubMenu,
} from "./SubMenuBurger";
function HeaderNavBurgerList() {
  const NavDesktopArray = [
    {
      id: "0",
      text: "home",
      submenu: <HomeSubMenu />,
    },
    {
      id: "1",
      text: "portfolio",
      submenu: <PortfolioSubMenu />,
    },
    {
      id: "2",
      text: "blog",
      submenu: <PagesSubMenu />,
    },
    {
      id: "3",
      text: "pages",
      submenu: <BlogSubMenu />,
    },
  ];

  const StyleList = {
    display: "block",
    margin: "0 0 0 0",
    backgroundColor: "white",
  };
  const StyleListItem = {
    listStyleType: "none",
    margin: "0 0 2% 0",
  };
  const StyleLink = {
    textTransform: "uppercase",
    textDecoration: "none",
    color: "black",
    fontWeight: "normal",
    fontSize: "",
    cursor: "pointer",
  };
  return (
    <CastomList
      linkArray={NavDesktopArray}
      ListStyle={StyleList}
      ListItemStyle={StyleListItem}
      LinkStyle={StyleLink}
    />
  );
}
export default HeaderNavBurgerList;
