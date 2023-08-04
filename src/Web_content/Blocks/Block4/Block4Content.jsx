import CastomText from "../../../A1_Castom_Components/CastomText";
import "../Blocks_Global_style.css";

export function NumberText() {
  const numberTextArray = ["4"];
  const numberTextStyleObj = {
    castomTextConteinerStyle: "global_Text_Conteiner_Style",
    castomTextStyle: "global_Text_Style_Number",
  };
  return (
    <CastomText textArray={numberTextArray} customClass={numberTextStyleObj} />
  );
}

export function SmallText() {
  const smallTextArray = ["what", "clients say"];
  const smallTextStyleObj = {
    castomTextConteinerStyle: "global_Text_Conteiner_Style",
    castomTextStyle: "global_Text_Style_Small",
  };
  return (
    <CastomText textArray={smallTextArray} customClass={smallTextStyleObj} />
  );
}

export function LongText() {
  const longTextArray = [
    "Lianansan- a studio with",
    "passionate, propffessional & full",
    "creativity. Much more that what I`m",
    "expect. Really awesome & satisfied",
  ];
  const longMiniTextArray = ["Diogo Jota"];
  const longMicroTextArray = ["Lead Product at Google Inc"];

  const castomTextStyleAddLong = "text_Style_Long";
  const castomTextStyleAddMini = "text_Style_Long_Mini";
  const castomTextStyleAddMicro = "text_Style_Long_Micro";

  return (
    <>
      <CastomText
        textArray={longTextArray}
        castomTextStyleAdd={castomTextStyleAddLong}
      />
      <CastomText
        textArray={longMiniTextArray}
        castomTextStyleAdd={castomTextStyleAddMini}
      />
      <CastomText
        textArray={longMicroTextArray}
        castomTextStyleAdd={castomTextStyleAddMicro}
      />
    </>
  );
}
