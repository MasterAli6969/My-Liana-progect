import CastomDiv from "../../../A1_Castom_Components/CastomDiv";
import Logo from "./Logo";
import HearedNavDesktopMenu from "./HearedNavDesktopMenu";
import "./HeaderNavStyle.css";
function HeaderNavDesktop() {
  const divStyleConteiner = "navConteiner";
  const navDivArray = [
    {
      id: "1",
      left: <Logo />,
      right: <HearedNavDesktopMenu />,
    },
  ];
  return (
    <>
      <CastomDiv
        divArray={navDivArray}
        castomDivStyleConteiner={divStyleConteiner}
      />
    </>
  );
}
export default HeaderNavDesktop;
