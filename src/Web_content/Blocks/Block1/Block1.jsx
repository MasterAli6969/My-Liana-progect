import CastomDiv from "../../../A1_Castom_Components/CastomDiv";
import { Block1Left, Block1Rihgt } from "./Block1ContetnDiv";
import "../Blocks_Global_style.css";
function Block1() {
  const Block1Array = [
    {
      id: "1",
      left: <Block1Left />,
      right: <Block1Rihgt />,
    },
  ];
  return (
    <>
      <CastomDiv
        divArray={Block1Array}
        castomDivStyleConteinerAdd="global_Div_Block_Style_Conteiner"
      />
      <hr className="global_Line_Style" />
    </>
  );
}

export default Block1;
