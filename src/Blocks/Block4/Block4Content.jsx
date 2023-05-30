import CastomText from "../../A1_Castom_Components/CastomText";
const StyleDivConteiner = {
  display: "block",
  margin: "0 0 0 0",
};

export function NumberText() {
  const numberTextArray = ["4"];
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
  const smallTextArray = ["what", "clients say"];
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
  const lastTextArray = [
    "Lianansan- a studio with",
    "passionate, propffessional & full",
    "creativity. Much more that what I`m",
    "expect. Really awesome & satisfied",
  ];
  const StyleText = {
    fontSize: "40px",
    fontWeight: "normal",
    margin: "0 0 0 0",
  };

  const lastMiniTextArray = ["Diogo Jota"];
  const StyleTextMini = {
    fontSize: "18px",
    fontWeight: "normal",
    margin: "10% 0 0 0",
  };

  const lastMicroTextArray = ["Lead Product at Google Inc"];
  const StyleTextMicro = {
    fontSize: "14",
    opacity: "0.6",
    margin: "3% 0 0 0",
  };

  return (
    <>
      <CastomText
        textArray={lastTextArray}
        DivStyleConteiner={StyleDivConteiner}
        TextStyle={StyleText}
      />
      <CastomText
        textArray={lastMiniTextArray}
        DivStyleConteiner={StyleDivConteiner}
        TextStyle={StyleTextMini}
      />
      <CastomText
        textArray={lastMicroTextArray}
        DivStyleConteiner={StyleDivConteiner}
        TextStyle={StyleTextMicro}
      />
    </>
  );
}
