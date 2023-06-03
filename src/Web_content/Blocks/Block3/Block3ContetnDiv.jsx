import CastomDiv from "../../../A1_Castom_Components/CastomDiv";
import { NumberText, SmallText, MiddlleText, LastText } from "./Block3Content";
export function Block3Left() {
  const Block3LeftArray = [
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
      divArray={Block3LeftArray}
      DivStyleConteiner={StyleDivConteiner}
    />
  );
}

export function Block3Rihgt() {
  const Block3RightArray = [
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
      divArray={Block3RightArray}
      DivStyleConteiner={StyleDivConteiner}
    />
  );
}
