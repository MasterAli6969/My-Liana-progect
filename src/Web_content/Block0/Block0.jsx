import CastomDiv from "../../A1_Castom_Components/CastomDiv";
import Block0LeftConteiner from "./Block0LeftConreiner";
import Block0Right from "./Block0Right";
import "./Block0.css";
function Block0() {
  const divStyleConteiner = "divStyleConteiner";
  const divStyleSubConteinerLeft = "divStyleSubConteinerLeft";
  const divStyleSubConteinerRight = "divStyleSubConteinerRight";
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
        castomDivStyleConteiner={divStyleConteiner}
        castomDivStyleSubConteinerLeft={divStyleSubConteinerLeft}
        castomDivStyleSubConteinerRight={divStyleSubConteinerRight}
      />
      <hr className="global_Line_Style" />
    </>
  );
}
export default Block0;
