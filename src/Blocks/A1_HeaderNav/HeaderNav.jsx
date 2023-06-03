import CastomDiv from "../../A1_Castom_Components/CastomDiv";
import Logo from "../../ImgComonents/Logo";
import HearedNavDesktopMenu from "./HearedNavDesktopMenu";
import "./HeaderNavStyle.css";
function HeaderNav() {
  const divStyleConteiner = "navConteiner";
  const navDivArray = [
    {
      id: "1",
      left: <Logo />,
      right: <HearedNavDesktopMenu />,
    },
  ];

  return (
    <CastomDiv divArray={navDivArray} casromDivStyleConteiner={divStyleConteiner} />
  );
}
export default HeaderNav;
