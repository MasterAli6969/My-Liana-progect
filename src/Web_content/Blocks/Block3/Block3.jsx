import CastomDiv from "../../../A1_Castom_Components/CastomDiv";
import { Block3Left, Block3Rihgt } from "./Block3ContetnDiv";
import "../Blocks_Global_style.css";
function Block3() {
  const castomDivStyleConteiner = "global_Div_Block_Style_Conteiner";
  const Block1Array = [
    {
      id: "1",
      left: <Block3Left />,
      right: <Block3Rihgt />,
    },
  ];
  return (
    <>
      <CastomDiv
        divArray={Block1Array}
        castomDivStyleConteiner={castomDivStyleConteiner}
      />
      <hr className="global_Line_Style" />
    </>
  );
}

export default Block3;
