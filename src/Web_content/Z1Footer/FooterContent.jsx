import CastomList from "../../A1_Castom_Components/CastomList";
import CastomText from "../../A1_Castom_Components/CastomText";
import "./Footer.css";
export function FooterNav() {
  
  const FooterNavStyleObj = {
    castomUlStyle: "footer_Style_Ul_Conteiner",
    castomLiStyle: "footer_Style_Li",
    castomAStyle: "footer_Style_a",
  };

  const NavFooterArrayLeft = [
    {
      id: "0",
      url: "#",
      text: "faqs",
    },
    {
      id: "1",
      url: "#",
      text: "term & conditions",
    },
    {
      id: "2",
      url: "#",
      text: "privacy policy",
    },
    {
      id: "3",
      url: "#",
      text: "help",
    },
  ];
  const NavFooterArrayRight = [
    {
      id: "0",
      url: "#",
      text: "works",
    },
    {
      id: "1",
      url: "#",
      text: "studio",
    },
    {
      id: "2",
      url: "#",
      text: "news",
    },
  ];
  return (
    <div className="footer_Div_Linck_Conteiner">
      <CastomList
        linkArray={NavFooterArrayLeft}
        customClass={FooterNavStyleObj}
      />
      <CastomList
        linkArray={NavFooterArrayRight}
        customClass={FooterNavStyleObj}
      />
    </div>
  );
}

export function MailTextBlock() {
  const castomMailStyle = "footer_Style_Mail_Text";
  const castomAdressStyle = "footer_Style_Adress_Text";

  const lastTextArray = ["hello@lianansan.com"];

  const lastMicroTextArray = ["90 Fairground Rd, FL 3290, United States"];

  return (
    <div className="footer_Div_Mail_Text_Conteiner">
      <CastomText textArray={lastTextArray} castomTextStyle={castomMailStyle} />
      <CastomText
        textArray={lastMicroTextArray}
        castomTextStyle={castomAdressStyle}
      />
    </div>
  );
}
