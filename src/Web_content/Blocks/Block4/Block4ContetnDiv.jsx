import CastomDiv from "../../../A1_Castom_Components/CastomDiv";
import { NumberText, SmallText, LastText } from "./Block4Content";
export function Block4Left() {
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

export function Block4Rihgt() {
  const Block3RightArray = [
    {
      id: "1",
      right: <LastText />,
    },
  ];
  const StyleDivConteiner = {
    display: "block",
    margin: "0 0 0 0",
  };
  return (
    <CastomDiv
      divArray={Block3RightArray}
      DivStyleConteiner={StyleDivConteiner}
    />
  );
}
