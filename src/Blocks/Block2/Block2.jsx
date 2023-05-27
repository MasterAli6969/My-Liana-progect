import CastomDiv from "../../A1_Castom_Components/CastomDiv";
import { Block2Left, Block2Rihgt } from "./Block2ContetnDiv";
function Block2() {
  const Block1Array = [
    {
      id: "1",
      left: <Block2Left />,
      right: <Block2Rihgt />,
    },
  ];
  const StyleDivConteiner = {
    display: "flex",
    justifyContent: "space-between",
    width: "65%",
    margin: "10% 0 0 0",
    flexWrap: "wrap",
  };
  return (
    <>
      <CastomDiv divArray={Block1Array} DivStyleConteiner={StyleDivConteiner} />
    </>
  );
}

export default Block2;
