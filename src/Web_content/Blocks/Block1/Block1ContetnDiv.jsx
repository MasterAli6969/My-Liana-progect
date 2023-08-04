import CastomDiv from "../../../A1_Castom_Components/CastomDiv";
import { NumberText, SmallText, MiddlleText, LastText } from "./Block1Content";
import "../Blocks_Global_style.css";
export function Block1Left() {
  const Block1LeftArray = [
    {
      id: "1",
      left: <NumberText />,
      right: <SmallText />,
    },
  ];
  return (
    <CastomDiv
      divArray={Block1LeftArray}
      castomDivStyleConteinerAdd="global_Div_Block_Style_Sub_Conteiner"
    />
  );
}

export function Block1Rihgt() {
  const Block1RightArray = [
    {
      id: "1",
      left: <MiddlleText />,
      right: <LastText />,
    },
  ];
  return (
    <CastomDiv
      divArray={Block1RightArray}
      castomDivStyleConteinerAdd="global_Div_Block_Style_Sub_Conteiner"
    />
  );
}
