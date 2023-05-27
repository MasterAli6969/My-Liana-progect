import CastomDiv from "../../A1_Castom_Components/CastomDiv";
import Block0LeftConteiner from "./Block0LeftConreiner";
import Block0Right from "./Block0Right";
import CastomLine from "../../A1_Castom_Components/CastomLine";
function Block0() {
  const Block0Array = [
    {
      id: "1",
      left: <Block0LeftConteiner />,
      right: <Block0Right />,
    },
  ];
  const StyleDivConteiner = {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 50px 0 50px",
    flexWrap: "wrap",
  };

  const LeftOrder = {
    order: "2",
  };
  const RightOrder = {
    order: "1",
  };

  const LineBlock0 = {
    height: "1px",
    width: "98%",
    backgroundColor: "white",
    margin: "80px 0 0 0 ",
    opacity: "0.7"
  };

  return (
    <>
      <CastomDiv
        divArray={Block0Array}
        DivStyleConteiner={StyleDivConteiner}
        OrderLeft={LeftOrder}
        OrderRight={RightOrder}
      />
      <CastomLine LineStyle= {LineBlock0}/>
    </>
  );
}
export default Block0;
