import CastomDiv from "../../A1_Castom_Components/CastomDiv";
import Logo from "../../ImgComonents/Logo";
import HearedNavDesktopMenu from "./HearedNavDesktopMenu";
function HeaderNav() {
  const navDivArray = [
    {
      id: "1",
      left: <Logo />,
      right: <HearedNavDesktopMenu />,
    },
  ];
  const StyleDivConteiner = {
    display: "flex",
    width: "90%",
    justifyContent: "space-between",
    margin: "30px 30px 0 0",
  };

  return (
    <CastomDiv divArray={navDivArray} DivStyleConteiner={StyleDivConteiner} />
  );
}
export default HeaderNav;
