import CastomText from "../../../A1_Castom_Components/CastomText";
import "../Blocks_Global_style.css";

export function NumberText() {
  const numberTextArray = ["3"];
  const numberTextStyleObj = {
    castomTextConteinerStyle: "global_Text_Conteiner_Style",
    castomTextStyle: "global_Text_Style_Number",
  };
  return (
    <CastomText textArray={numberTextArray} customClass={numberTextStyleObj} />
  );
}

export function SmallText() {
  const smallTextArray = ["trusted", "partners"];
  const smallTextStyleObj = {
    castomTextConteinerStyle: "global_Text_Conteiner_Style",
    castomTextStyle: "global_Text_Style_Small",
  };
  return (
    <CastomText textArray={smallTextArray} customClass={smallTextStyleObj} />
  );
}

const middlleLastTextStyleObj = {
  castomTextConteinerStyle: "global_Text_Conteiner_Style",
  castomTextStyle: "global_Text_Style_Middle",
};

export function MiddlleText() {
  const middlleTextArray = ["Apple", "Spotify", "IMB", "Google", "Dropbox"];
  return (
    <CastomText
      textArray={middlleTextArray}
      customClass={middlleLastTextStyleObj}
    />
  );
}

export function LastText() {
  const lastTextArray = ["Envato", "Woocommerce", "Discord"];
  return (
    <CastomText
      textArray={lastTextArray}
      customClass={middlleLastTextStyleObj}
    />
  );
}
