import CastomDiv from "../../../A1_Castom_Components/CastomDiv";
import { Block4Left, Block4Rihgt } from "./Block4ContetnDiv";
import "../Blocks_Global_style.css";
function Block4() {
  const castomDivStyleConteiner = "global_Div_Block_Style_Conteiner";
  const Block1Array = [
    {
      id: "1",
      left: <Block4Left />,
      right: <Block4Rihgt />,
    },
  ];
  return (
    <>
      <CastomDiv
        divArray={Block1Array}
        castomDivStyleConteiner={castomDivStyleConteiner}
      />
    </>
  );
}

export default Block4;
