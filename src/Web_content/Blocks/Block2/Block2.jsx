import CastomDiv from "../../../A1_Castom_Components/CastomDiv";
import { Block2Left, Block2Rihgt } from "./Block2ContetnDiv";
import "../Blocks_Global_style.css";
function Block2() {
  const Block1Array = [
    {
      id: "1",
      left: <Block2Left />,
      right: <Block2Rihgt />,
    },
  ];
  return (
    <>
      <CastomDiv
        divArray={Block1Array}
        castomDivStyleConteinerAdd="global_Div_Block_Style_Conteiner"
      />
    </>
  );
}

export default Block2;
