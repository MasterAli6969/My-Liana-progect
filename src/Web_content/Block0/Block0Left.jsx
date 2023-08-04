import CastomText from "../../A1_Castom_Components/CastomText";
import Arrow from "./Arrow";
import "./Block0.css";
export function BigText() {
  const textBigArray = ["Bigger,", "Bolder and", "Better"];
  const bigTextStyleObj = {
    castomTextConteinerStyle: "textBigConteinerStyle",
    castomTextStyle: "textBigStyle",
  };
  return <CastomText textArray={textBigArray} customClass={bigTextStyleObj} />;
}
export function NormalText() {
  const textNormalArray = [
    "We`re from Poland, we passioned with the space &",
    "create the values vsustainable over time",
  ];
  const normalTextStyleObj = {
    castomTextConteinerStyle: "textSmallConteinerStyle",
    castomTextStyle: "textSmallStyle",
  };
  return (
    <>
      <CastomText
        textArray={textNormalArray}
        customClass={normalTextStyleObj}
      />
      <Arrow />
    </>
  );
}
