import CastomText from "../../A1_Castom_Components/CastomText";
import Arrow from "./Arrow";
import "./Block0.css";
export function BigText() {
  const textBigConteinerStyle = "textBigConteinerStyle";
  const textBigStyle = "textBigStyle";
  const textBigArray = ["Bigger,", "Bolder and", "Better"];
  return (
    <CastomText
      textArray={textBigArray}
      castomTextConteinerStyle={textBigConteinerStyle}
      castomTextStyle={textBigStyle}
    />
  );
}
export function NormalText() {
  const textSmallConteinerStyle = "textSmallConteinerStyle";
  const textSmallStyle = "textSmallStyle";
  const textNormalArray = [
    "We`re from Poland, we passioned with the space &",
    "create the values vsustainable over time",
  ];
  return (
    <>
      <CastomText
        textArray={textNormalArray}
        castomTextConteinerStyle={textSmallConteinerStyle}
        castomTextStyle={textSmallStyle}
      />
      <Arrow />
    </>
  );
}
