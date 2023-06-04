import CastomText from "../../../A1_Castom_Components/CastomText";
import "../Blocks_Global_style.css";
const castomTextConteinerStyle = "global_Text_Conteiner_Style";
const castomTextStyleNumber = "global_Text_Style_Number";
const castomTextStyleSmall = "global_Text_Style_Small";
const castomTextStyleLong = "text_Style_Long";
const castomTextStyleLongMini = "text_Style_Long_Mini";
const castomTextStyleLongMicro = "text_Style_Long_Micro";

export function NumberText() {
  const numberTextArray = ["4"];
  return (
    <CastomText
      textArray={numberTextArray}
      castomTextConteinerStyle={castomTextConteinerStyle}
      castomTextStyle={castomTextStyleNumber}
    />
  );
}

export function SmallText() {
  const smallTextArray = ["what", "clients say"];
  return (
    <CastomText
      textArray={smallTextArray}
      castomTextConteinerStyle={castomTextConteinerStyle}
      castomTextStyle={castomTextStyleSmall}
    />
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

  return (
    <>
      <CastomText
        textArray={longTextArray}
        castomTextStyle={castomTextStyleLong}
      />
      <CastomText textArray={longMiniTextArray}  castomTextStyle ={castomTextStyleLongMini}/>
      <CastomText textArray={longMicroTextArray} castomTextStyle ={castomTextStyleLongMicro} />
    </>
  );
}
