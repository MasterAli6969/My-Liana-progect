import CastomDiv from "./Castom_Camponents/CastomDiv";
import CastomLinks from "./Castom_Camponents/CastomLinks";
function Test() {
  const testAraay = [
    {
      id: "1",
      left: <CastomLinks />,
      right: <CastomLinks />,
    },
  ];
  const DivStyleConteiner = {
    display: "flex",
    justifyContent: "space-between",
    margin: "50 0 0 0",
  };
  return (
    <div>
      <CastomDiv costArray={testAraay} DivStyleConteiner={DivStyleConteiner} />
    </div>
  );
}

export default Test;
