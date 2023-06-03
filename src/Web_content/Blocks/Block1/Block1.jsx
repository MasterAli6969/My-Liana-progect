import CastomDiv from "../../../A1_Castom_Components/CastomDiv";
import { Block1Left, Block1Rihgt } from "./Block1ContetnDiv";
function Block1() {
  const Block1Array = [
    {
      id: "1",
      left: <Block1Left />,
      right: <Block1Rihgt />,
    },
  ];
  const StyleDivConteiner = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    margin: "10% 0 0 0",
    flexWrap: "wrap",
  };
  const LineBlock0 = {
    height: "1px",
    width: "98%",
    backgroundColor: "white",
    margin: "10% 0 0 0 ",
    opacity: "0.7",
  };
  return (
    <>
      <CastomDiv divArray={Block1Array} DivStyleConteiner={StyleDivConteiner} />
    </>
  );
}

export default Block1;
