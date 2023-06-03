import { BigText, NormalText } from "./Block0Left";
import CastomDiv from "../../A1_Castom_Components/CastomDiv";
import "./Block0.css";
function Block0LeftConteiner() {
  const Block0LeftArray = [
    {
      id: "1",
      left: <BigText />,
      right: <NormalText />,
    },
  ];

  return <CastomDiv divArray={Block0LeftArray} />;
}
export default Block0LeftConteiner;
