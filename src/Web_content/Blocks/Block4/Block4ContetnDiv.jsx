import CastomDiv from "../../../A1_Castom_Components/CastomDiv";
import { NumberText, SmallText, LongText } from "./Block4Content";
import "../Blocks_Global_style.css";
const castomDivStyleConteiner = "global_Div_Block_Style_Sub_Conteiner";
export function Block4Left() {
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

export function Block4Rihgt() {
  const Block1RightArray = [
    {
      id: "1",
      left: <LongText />,
    },
  ];
  return (
    <CastomDiv
      divArray={Block1RightArray}
      castomDivStyleConteiner={castomDivStyleConteiner}
    />
  );
}
