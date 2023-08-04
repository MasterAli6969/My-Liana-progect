import CastomText from "../../../A1_Castom_Components/CastomText";
import "../Blocks_Global_style.css";

export function NumberText() {
  const numberTextArray = ["2"];
  const numberTextStyleObj = {
    castomTextConteinerStyle: "global_Text_Conteiner_Style",
    castomTextStyle: "global_Text_Style_Number",
  };
  return (
    <CastomText textArray={numberTextArray} customClass={numberTextStyleObj} />
  );
}

export function SmallText() {
  const smallTextArray = ["latest", "propjects"];
  const smallTextStyleObj = {
    castomTextConteinerStyle: "global_Text_Conteiner_Style",
    castomTextStyle: "global_Text_Style_Small",
  };
  return (
    <CastomText textArray={smallTextArray} customClass={smallTextStyleObj} />
  );
}

export function MiddlleText() {
  const middlleTextArray = ["All Projects"];
  const middlleLastTextStyleObj = {
    castomTextConteinerStyle: "global_Text_Conteiner_Style",
    castomTextStyle: "global_Text_Style_Middle",
  };
  return (
    <CastomText
      textArray={middlleTextArray}
      customClass={middlleLastTextStyleObj}
    />
  );
}
