import CastomDiv from "../../A1_Castom_Components/CastomDiv";
import Block0LeftConteiner from "./Block0LeftConreiner";
import Block0Right from "./Block0Right";
import "./Block0.css";
function Block0() {
  
  const Block0StyleObj = {
    castomDivStyleConteiner: "divStyleConteiner",
    castomDivStyleSubConteinerLeft: "divStyleSubConteinerLeft",
    castomDivStyleSubConteinerRight: "divStyleSubConteinerRight",
  };
  const Block0Array = [
    {
      id: "1",
      left: <Block0LeftConteiner />,
      right: <Block0Right />,
    },
  ];

  return (
    <>
      <CastomDiv divArray={Block0Array} customClass={Block0StyleObj} />
      <hr className="global_Line_Style" />
    </>
  );
}
export default Block0;
