import Logo from "../A1_HeaderNav/Logo";
import { FooterNav, MailTextBlock } from "./FooterContent";
import { DivStyleConteiner } from "../../A1_Castom_Components/Style";
function Footer() {
  const StyleDivConteiner = {
    display: window.innerWidth <= 900 ? "block" : "flex",
    justifyContent: "space-between",
    width: "95%",
    margin: "10% 0 0 2%",
    flexWrap: "wrap",
  };

  return (
    <DivStyleConteiner style={StyleDivConteiner}>
        <Logo/>
        <FooterNav/>
        <MailTextBlock/>
    </DivStyleConteiner>
  );
}
export default Footer;
