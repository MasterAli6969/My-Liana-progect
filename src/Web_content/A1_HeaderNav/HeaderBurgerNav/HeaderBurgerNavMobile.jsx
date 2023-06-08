import CastomBurgerLincks from "../../../A1_Castom_Components/CastomBurgerLincks";
import {
  HomeSubMenu,
  PortfolioSubMenu,
  BlogSubMenu,
  PagesSubMenu,
} from "../HeaderNav/SubMenuContent";
import "./HeaderBurgerNav.css";
function HeaderBurgerNavMobile() {
  const ulStyle = "nav_Burger_Ul";
  const liStyle = "nav_Burger_Li";
  const aStyle = "nav_Burger_a";
  const spanStyle = "nav_Burger_arrow";
  const ulSubStyle = "sub_Ul";
  const liSubStyle = ".sub_Li";
  const aSubStyle = "sub_Burger_a";
  const linkBurgerArray = [
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
    <CastomBurgerLincks
      linkArray={linkBurgerArray}
      castomUlStyle={ulStyle}
      castomLiStyle={liStyle}
      castomAStyle={aStyle}
      castomSpanStyle={spanStyle}
    />
  );
}

export default HeaderBurgerNavMobile;
