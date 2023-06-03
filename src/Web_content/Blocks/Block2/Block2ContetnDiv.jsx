import CastomDiv from "../../../A1_Castom_Components/CastomDiv";
import { NumberText, SmallText, LastText } from "./Block2Content";
export function Block2Left() {
  const Block2LeftArray = [
    {
      id: "1",
      left: <NumberText />,
      right: <SmallText />,
    },
  ];
  const StyleDivConteiner = {
    display: "flex",
    margin: "0 0 50px 0",
    width: "",
    justifyContent: "space-between",
  };
  return (
    <CastomDiv
      divArray={Block2LeftArray}
      DivStyleConteiner={StyleDivConteiner}
    />
  );
}

export function Block2Rihgt() {
  const Block2RightArray = [
    {
      id: "1",
      left: <LastText />,
    },
  ];
  const StyleDivConteiner = {
    display: "flex",
    margin: "0 0 0 0",
    justifyContent: "space-between",
  };
  return (
    <CastomDiv
      divArray={Block2RightArray}
      DivStyleConteiner={StyleDivConteiner}
    />
  );
}
