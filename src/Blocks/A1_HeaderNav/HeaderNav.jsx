import CastomDiv from "../../A1_Castom_Components/CastomDiv";
import Logo from "../../ImgComonents/Logo";
import NavDesktop from "./NavDesktop";
function HeaderNav() {
  const navDivArray = [
    {
      id: "1",
      left: <Logo />,
      right: <NavDesktop />,
    },
  ];
  const StyleDivConteiner = {
    display: "flex",
    justifyContent: "space-between",
    margin: "30px 0 0 0",
  };

  return (
    <CastomDiv divArray={navDivArray} DivStyleConteiner={StyleDivConteiner} />
  );
}
export default HeaderNav;
