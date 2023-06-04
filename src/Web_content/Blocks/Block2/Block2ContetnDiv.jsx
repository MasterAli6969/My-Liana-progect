import CastomDiv from "../../../A1_Castom_Components/CastomDiv";
import { NumberText, SmallText, MiddlleText } from "./Block2Content";
import "../Blocks_Global_style.css";
const castomDivStyleConteiner = "global_Div_Block_Style_Sub_Conteiner";
export function Block2Left() {
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
      castomDivStyleConteiner={castomDivStyleConteiner}
    />
  );
}

export function Block2Rihgt() {
  const Block1RightArray = [
    {
      id: "1",
      left: <MiddlleText />,
    },
  ];
  return (
    <CastomDiv
      divArray={Block1RightArray}
      castomDivStyleConteiner={castomDivStyleConteiner}
    />
  );
}
