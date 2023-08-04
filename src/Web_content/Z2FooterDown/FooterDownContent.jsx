import CastomText from "../../A1_Castom_Components/CastomText";
import CastomList from "../../A1_Castom_Components/CastomList";
import "./FooterDown.css";
export function CopyrightText() {
  const castomTextConteinerStyle = "footerDown_Style_Text_Conteiner";
  const castomTextStyle = "footerDown_Style_Text";

  const CopyrightTextArray = ["© id-themes. All Rights Reserved"];

  return (
    <CastomText
      textArray={CopyrightTextArray}
      castomTextConteinerStyle={castomTextConteinerStyle}
      castomTextStyle={castomTextStyle}
    />
  );
}

export function IconLinksSocialWeb() {
  const IconLinksSocialWebStyleObj = {
    castomUlStyle: "footerDown_Div_Style_Img_Link_Conteiner",
    castomLiStyle: "footerDown_Style_Img_Link_Conteiner",
    castomImgStyle: "footerDown_Style_Img_Link",
  };
  const IconLinksSocialWebArray = [
    {
      id: "0",
      url: "#",
      image: process.env.PUBLIC_URL + "/image/Group 6.png",
    },
    {
      id: "1",
      url: "#",
      image: process.env.PUBLIC_URL + "/image/Group 5.png",
    },
    {
      id: "2",
      url: "#",
      image: process.env.PUBLIC_URL + "/image/Group 4.png",
    },
    {
      id: "3",
      url: "#",
      image: process.env.PUBLIC_URL + "/image/Group 3.png",
    },
    {
      id: "4",
      url: "#",
      image: process.env.PUBLIC_URL + "/image/Group 2.png",
    },
  ];
  return (
    <CastomList
      linkArray={IconLinksSocialWebArray}
      customClass={IconLinksSocialWebStyleObj}
    />
  );
}
