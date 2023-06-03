import SetCastomLinck from "../../A1_Castom_Components/SetCastomLinck";
import "./HeaderNavStyle.css"
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
  const linkArray = [
    {
      url: "#",
      text: "home",
      submenu: <HomeSubMenu />,
    },
    {
      url: "#",
      text: "Portfolio",
      submenu: <PortfolioSubMenu />,
    },
    {
      url: "#",
      text: "Blog",
      submenu: <BlogSubMenu />,
    },
    {
      url: "#",
      text: "Pages",
      submenu: <PagesSubMenu />,
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
