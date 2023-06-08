import Logo from "../A1_HeaderNav/HeaderNav/Logo";
import { FooterNav, MailTextBlock } from "./FooterContent";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer_Conteiner">
      <Logo />
      <FooterNav />
      <MailTextBlock />
    </div>
  );
}
export default Footer;
