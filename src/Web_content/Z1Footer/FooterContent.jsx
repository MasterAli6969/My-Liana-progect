import CastomList from "../../A1_Castom_Components/CastomList";
import CastomText from "../../A1_Castom_Components/CastomText";
import { DivStyleConteiner } from "../../A1_Castom_Components/Style";
export function FooterNav() {
  const StyleDivConteiner = {
    display: "flex",
    margin: "0 40px 0 0",
  };
  const StyleList = {
    display: "block",
    margin: "0 0 0 0",
  };
  const StyleListItem = {
    listStyleType: "none",
    margin: "0 0 25px 0",
  };
  const StyleLink = {
    textTransform: "uppercase",
    textDecoration: "none",
    color: "white",
    fontWeight: "600",
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
    <DivStyleConteiner style={StyleDivConteiner}>
      <CastomList
        linkArray={NavFooterArrayLeft}
        ListStyle={StyleList}
        ListItemStyle={StyleListItem}
        LinkStyle={StyleLink}
      />
      <CastomList
        linkArray={NavFooterArrayRight}
        ListStyle={StyleList}
        ListItemStyle={StyleListItem}
        LinkStyle={StyleLink}
      />
    </DivStyleConteiner>
  );
}

export function MailTextBlock() {
  const StyleTextConteiner = {
    display: "block",
    margin: "0 0 0 0",
  };
  const lastTextArray = ["hello@lianansan.com"];
  const StyleText = {
    fontSize: "40px",
    fontWeight: "normal",
    margin: "0 0 0 0",
  };

  const lastMicroTextArray = ["90 Fairground Rd, FL 3290, United States"];
  const StyleTextMicro = {
    fontSize: "20",
    opacity: "0.6",
    margin: "3% 0 0 0",
  };

  return (
    <DivStyleConteiner style={StyleTextConteiner}>
      <CastomText textArray={lastTextArray} TextStyle={StyleText} />
      <CastomText textArray={lastMicroTextArray} TextStyle={StyleTextMicro} />
    </DivStyleConteiner>
  );
}
