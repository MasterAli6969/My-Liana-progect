import CastomText from "../../A1_Castom_Components/CastomText";
const StyleDivConteiner = {
  display: "block",
  margin: "0 0 0 0",
};
const StyleText = {
  fontSize: "50px",
  fontWeight: "normal",
  margin: "0 50px 0 0",
  opacity: "0.7",
};
export function NumberText() {
  const numberTextArray = ["1"];
  const StyleDivConteiner = {
    display: "block",
    margin: "0 0 0 0",
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
  const smallTextArray = ["our", "services"];
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

export function MiddlleText() {
  const middlleTextArray = ["Branding", "UI/UX", "Photography", "Animation"];
  return (
    <CastomText
      textArray={middlleTextArray}
      DivStyleConteiner={StyleDivConteiner}
      TextStyle={StyleText}
    />
  );
}

export function LastText() {
  const lastTextArray = ["Illustration", "SEO/Marketing"];
  return (
    <CastomText
      textArray={lastTextArray}
      DivStyleConteiner={StyleDivConteiner}
      TextStyle={StyleText}
    />
  );
}
