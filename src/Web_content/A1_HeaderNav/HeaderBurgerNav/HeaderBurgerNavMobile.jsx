import CastomBurgerLincks from "../../../A1_Castom_Components/CastomBurgerLincks";
import {
  HomeSubMenu,
  PortfolioSubMenu,
  BlogSubMenu,
  PagesSubMenu,
} from "../HeaderNav/SubMenuContent";
import "./HeaderBurgerNav.css";
function HeaderBurgerNavMobile() {
  const HeaderBurgerNavMobileStyleObj = {
    castomUlStyle: "nav_Burger_Ul",
    castomLiStyle: "nav_Burger_Li",
    castomAStyle: "nav_Burger_a",
    castomSpanStyle: "nav_Burger_arrow",
  };

  const HearedNavDesktopSubMenuStyleObj = {
    castomUlStyle: "sub_Burger_Ul",
    castomLiStyle: "ub_Burger_Li",
    castomAStyle: "sub_Burger_a",
  };
  const linkBurgerArray = [
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
    <CastomBurgerLincks
      linkArray={linkBurgerArray}
      customClass={HeaderBurgerNavMobileStyleObj}
    />
  );
}

export default HeaderBurgerNavMobile;
