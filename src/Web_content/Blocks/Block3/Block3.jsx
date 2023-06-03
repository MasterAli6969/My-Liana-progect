import CastomDiv from "../../../A1_Castom_Components/CastomDiv";
import { Block3Left, Block3Rihgt } from "./Block3ContetnDiv";

function Block3() {
  const Block3Array = [
    {
      id: "1",
      left: <Block3Left />,
      right: <Block3Rihgt />,
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
      <CastomDiv divArray={Block3Array} DivStyleConteiner={StyleDivConteiner} />
    </>
  );
}

export default Block3;
