import CastomText from "../../A1_Castom_Components/CastomText";
import CastomList from "../../A1_Castom_Components/CastomList";
export function CopyrightText() {
  const StyleTextConteiner = {
    display: "block",
    margin: "0 0 0 20px",
  };
  const CopyrightTextArray = ["© id-themes. All Rights Reserved"];
  const StyleText = {
    fontSize: "15px",
    fontWeight: "normal",
    margin: "0 0 0 0",
  };

  return (
    <CastomText
      textArray={CopyrightTextArray}
      DivStyleConteiner={StyleTextConteiner}
      TextStyle={StyleText}
    />
  );
}

export function IconLinksSocialWeb() {
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

  const StyleList = {
    display: "flex",
    margin: "0 0 0 0",
  };
  const StyleListItem = {
    listStyleType: "none",
    margin: "0 0 0 20px",
  };
  const StyleIconImg = {
    width: "30px",
    height: "30px",
  };
  return (
    <CastomList
      ImgStyle={StyleIconImg}
      linkArray={IconLinksSocialWebArray}
      ListStyle={StyleList}
      ListItemStyle={StyleListItem}
    />
  );
}
