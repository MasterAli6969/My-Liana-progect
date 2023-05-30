import CastomDiv from "../../A1_Castom_Components/CastomDiv";
import { Block4Left, Block4Rihgt } from "./Block4ContetnDiv";
import CastomLine from "../../A1_Castom_Components/CastomLine";
function Block4() {
  const Block4Array = [
    {
      id: "1",
      left: <Block4Left />,
      right: <Block4Rihgt />,
    },
  ];
  const StyleDivConteiner = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    margin: "10% 0 0 0",
    flexWrap: "wrap",
  };
  const LineBlock4 = {
    height: "1px",
    width: "98%",
    backgroundColor: "white",
    margin: "10% 0 0 0 ",
    opacity: "0.7",
  };
  return (
    <>
      <CastomDiv divArray={Block4Array} DivStyleConteiner={StyleDivConteiner} />
      <CastomLine LineStyle={LineBlock4} />
    </>
  );
}

export default Block4;
