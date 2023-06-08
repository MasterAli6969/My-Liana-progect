import SetCastomLinck from "../../../A1_Castom_Components/SetCastomLinck";
import "./HeaderNavStyle.css";
import {
  HomeSubMenu,
  PortfolioSubMenu,
  BlogSubMenu,
  PagesSubMenu,
} from "./SubMenuContent";

function HearedNavDesktopMenu() {
  const ulStyle = "navUl";
  const liStyle = "nav_Li";
  const aStyle = "nav_a";
  const ulSubStyle = "sub_Ul";
  const liSubStyle = ".sub_Li";
  const aSubStyle = "sub_a";
  const linkArray = [
    {
      url: "#",
      text: "home",
      submenu: (
        <HomeSubMenu
          ulSubStyle={ulSubStyle}
          liSubStyle={liSubStyle}
          aSubStyle={aSubStyle}
        />
      ),
    },
    {
      url: "#",
      text: "Portfolio",
      submenu: (
        <PortfolioSubMenu
          ulSubStyle={ulSubStyle}
          liSubStyle={liSubStyle}
          aSubStyle={aSubStyle}
        />
      ),
    },
    {
      url: "#",
      text: "Blog",
      submenu: (
        <BlogSubMenu
          ulSubStyle={ulSubStyle}
          liSubStyle={liSubStyle}
          aSubStyle={aSubStyle}
        />
      ),
    },
    {
      url: "#",
      text: "Pages",
      submenu: (
        <PagesSubMenu
          ulSubStyle={ulSubStyle}
          liSubStyle={liSubStyle}
          aSubStyle={aSubStyle}
        />
      ),
    },
  ];
  return (
    <SetCastomLinck
      linkArray={linkArray}
      castomUlStyle={ulStyle}
      castomLiStyle={liStyle}
      castomAStyle={aStyle}
    />
  );
}

export default HearedNavDesktopMenu;
