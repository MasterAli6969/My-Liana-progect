import CastomText from "../../../A1_Castom_Components/CastomText";
import "../Blocks_Global_style.css";
const castomTextConteinerStyle = "global_Text_Conteiner_Style";
const castomTextStyleNumber = "global_Text_Style_Number";
const castomTextStyleSmall = "global_Text_Style_Small";
const castomTextStyleMiddle = "global_Text_Style_Middle";

export function NumberText() {
  const numberTextArray = ["3"];
  return (
    <CastomText
      textArray={numberTextArray}
      castomTextConteinerStyle={castomTextConteinerStyle}
      castomTextStyle={castomTextStyleNumber}
    />
  );
}

export function SmallText() {
  const smallTextArray = ["trusted", "partners"];
  return (
    <CastomText
      textArray={smallTextArray}
      castomTextConteinerStyle={castomTextConteinerStyle}
      castomTextStyle={castomTextStyleSmall}
    />
  );
}

export function MiddlleText() {
  const middlleTextArray = ["Apple", "Spotify", "IMB", "Google", "Dropbox"];
  return (
    <CastomText
      textArray={middlleTextArray}
      castomTextConteinerStyle={castomTextConteinerStyle}
      castomTextStyle={castomTextStyleMiddle}
    />
  );
}

export function LastText() {
  const lastTextArray = ["Envato", "Woocommerce", "Discord"];
  return (
    <CastomText
      textArray={lastTextArray}
      castomTextConteinerStyle={castomTextConteinerStyle}
      castomTextStyle={castomTextStyleMiddle}
    />
  );
}
