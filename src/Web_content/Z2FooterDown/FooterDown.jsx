import { DivStyleConteiner } from "../../A1_Castom_Components/Style";
import { CopyrightText, IconLinksSocialWeb } from "./FooterDownContent";
function FooterDown() {
  const StyleDivConteiner = {
    display: "flex",
    justifyContent: "space-between",
    width: "85%",
    margin: "10% 0 0 0",
    flexWrap: "wrap",
  };
  return (
    <DivStyleConteiner style={StyleDivConteiner}>
      <CopyrightText />
      <IconLinksSocialWeb />
    </DivStyleConteiner>
  );
}
export default FooterDown;
