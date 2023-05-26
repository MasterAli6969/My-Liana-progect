import CastomText from "../../A1_Castom_Components/CastomText";
import Arrow from "../../ImgComonents/Arrow";
export function BigText() {
  const textBigArray = ["Bigger,", "Bolder and", "Better"];
  const StyleDivConteiner = {
    display: "block",
    margin: "0 0 0 0",
  };
  const StyleText = {
    fontSize: "100px",
    fontWeight: "600",
    margin: "0 0 0 0",
  };
  return (
    <CastomText
      textArray={textBigArray}
      DivStyleConteiner={StyleDivConteiner}
      TextStyle={StyleText}
    />
  );
}

export function NormalText() {
  const textNormalArray = [
    "We`re from Poland, we passioned with the space &",
    "create the values vsustainable over time",
  ];
  const StyleDivConteiner = {
    display: "block",
    margin: "70px 0 80px 0",
  };
  const StyleText = {
    fontSize: "20px",
    fontWeight: "normal",
    margin: "0 0 0 0",
  };
  return (
    <>
      <CastomText
        textArray={textNormalArray}
        DivStyleConteiner={StyleDivConteiner}
        TextStyle={StyleText}
      />
      <Arrow />
    </>
  );
}
