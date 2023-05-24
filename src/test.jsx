import CastomDiv from "./Castom_Camponents/CastomDiv";
import CustomLinks from "./Castom_Camponents/CastomLinks";
function Test() {
  const testAraay = [<CustomLinks />, <CustomLinks />];
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
