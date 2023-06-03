import CastomDiv from "../../A1_Castom_Components/CastomDiv";
import Block0LeftConteiner from "./Block0LeftConreiner";
import Block0Right from "./Block0Right";
import CastomLine from "../../A1_Castom_Components/CastomLine";
import "./Block0.css";
function Block0() {
  const divStyleConteiner = "divStyleConteiner";
  const divStyleSubConteinerLeft = "divStyleSubConteinerLeft";
  const divStyleSubConteinerRight = "divStyleSubConteinerRight";
  const lineStyle = "lineStyle";
  const Block0Array = [
    {
      id: "1",
      left: <Block0LeftConteiner />,
      right: <Block0Right />,
    },
  ];

  return (
    <>
      <CastomDiv
        divArray={Block0Array}
        casromDivStyleConteiner={divStyleConteiner}
        casromDivStyleSubConteinerLeft={divStyleSubConteinerLeft}
        casromDivStyleSubConteinerRight={divStyleSubConteinerRight}
      />
      <CastomLine castomLineStyle={lineStyle} />
    </>
  );
}
export default Block0;
