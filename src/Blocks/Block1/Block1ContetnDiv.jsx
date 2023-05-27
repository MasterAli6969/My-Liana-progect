import CastomDiv from "../../A1_Castom_Components/CastomDiv";
import { NumberText, SmallText, MiddlleText, LastText } from "./Block1Content";
export function Block1Left() {
  const Block1LeftArray = [
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
      divArray={Block1LeftArray}
      DivStyleConteiner={StyleDivConteiner}
    />
  );
}

export function Block1Rihgt() {
  const Block1RightArray = [
    {
      id: "1",
      left: <MiddlleText />,
      right: <LastText />,
    },
  ];
  const StyleDivConteiner = {
    display: "flex",
    margin: "0 0 0 0",
    justifyContent: "space-between",
    // backgroundColor: "red",
  };
  return (
    <CastomDiv
      divArray={Block1RightArray}
      DivStyleConteiner={StyleDivConteiner}
    />
  );
}
