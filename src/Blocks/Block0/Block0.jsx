import CastomDiv from "../../A1_Castom_Components/CastomDiv";
import Block0LeftConteiner from "./Block0LeftConreiner";
import Block0Right from "./Block0Right";
function Block0() {
  const Block0Array = [
    {
      id: "1",
      left: <Block0LeftConteiner />,
      right: <Block0Right/>,
    },
  ];
  const StyleDivConteiner = {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 0 0 0",
  };
  return (
    <CastomDiv divArray={Block0Array} DivStyleConteiner={StyleDivConteiner} />
  );
}
export default Block0;
