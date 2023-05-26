import { BigText, NormalText } from "./Block0Left";
import CastomDiv from "../../A1_Castom_Components/CastomDiv";
function Block0LeftConteiner() {
  const Block0LeftArray = [
    {
      id: "1",
      left: <BigText />,
      right: <NormalText />,
    },
  ];
  const StyleDivConteiner = {
    display: "block",
    margin: "10% 0 0 0",
  };
  return (
    <CastomDiv divArray={Block0LeftArray} DivStyleConteiner={StyleDivConteiner} />
  );
} export default Block0LeftConteiner;
