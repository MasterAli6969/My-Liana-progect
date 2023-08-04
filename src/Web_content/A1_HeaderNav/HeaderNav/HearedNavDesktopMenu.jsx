import SetCastomLinck from "../../../A1_Castom_Components/SetCastomLinck";
import "./HeaderNavStyle.css";
import {
  HomeSubMenu,
  PortfolioSubMenu,
  BlogSubMenu,
  PagesSubMenu,
} from "./SubMenuContent";

function HearedNavDesktopMenu() {
  const HearedNavDesktopSubMenuStyleObj = {
    castomUlStyle: "sub_Ul",
    castomLiStyle: "sub_Li",
    castomAStyle: "sub_a",
  };

  const HearedNavDesktopMenuStyleObj = {
    castomUlStyle: "navUl",
    castomLiStyle: "nav_Li",
    castomAStyle: "nav_a",
  };
  const linkArray = [
    {
      url: "#",
      text: "home",
      submenu: <HomeSubMenu customClass={HearedNavDesktopSubMenuStyleObj} />,
    },
    {
      url: "#",
      text: "Portfolio",
      submenu: (
        <PortfolioSubMenu customClass={HearedNavDesktopSubMenuStyleObj} />
      ),
    },
    {
      url: "#",
      text: "Blog",
      submenu: <BlogSubMenu customClass={HearedNavDesktopSubMenuStyleObj} />,
    },
    {
      url: "#",
      text: "Pages",
      submenu: <PagesSubMenu customClass={HearedNavDesktopSubMenuStyleObj} />,
    },
  ];
  return (
    <SetCastomLinck
      linkArray={linkArray}
      customClass={HearedNavDesktopMenuStyleObj}
    />
  );
}

export default HearedNavDesktopMenu;
