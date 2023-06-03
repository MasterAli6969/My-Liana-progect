import CastomText from "../../../A1_Castom_Components/CastomText";
export function NumberText() {
  const numberTextArray = ["2"];
  const StyleDivConteiner = {
    display: "block",
    margin: "0 0 0 20%",
  };
  const StyleText = {
    fontSize: "80px",
    fontWeight: "normal",
    margin: "0 0 0 0",
  };
  return (
    <CastomText
      textArray={numberTextArray}
      DivStyleConteiner={StyleDivConteiner}
      TextStyle={StyleText}
    />
  );
}

export function SmallText() {
  const smallTextArray = ["latest", "projects"];
  const StyleDivConteiner = {
    display: "block",
    margin: "25px 0 0 0",
  };
  const StyleText = {
    textTransform: "uppercase",
    fontSize: "18px",
    fontWeight: "normal",
    margin: "0 0 0 250px",
    opacity: "0.7",
  };
  return (
    <CastomText
      textArray={smallTextArray}
      DivStyleConteiner={StyleDivConteiner}
      TextStyle={StyleText}
    />
  );
}

export function LastText() {
  const lastTextArray = ["All Project"];
  const StyleDivConteiner = {
    display: "block",
    margin: "0 0 0 0",
  };
  const StyleText = {
    fontSize: "50px",
    fontWeight: "normal",
    margin: "0 50px 50px 0",
    opacity: "0.7",
  };
  return (
    <CastomText
      textArray={lastTextArray}
      DivStyleConteiner={StyleDivConteiner}
      TextStyle={StyleText}
    />
  );
}