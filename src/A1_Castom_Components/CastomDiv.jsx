import { DivStyleConteiner } from "./Style";
import { OrderDiv } from "./Style";
function CastomDiv(props) {
  const { divArray } = props;
  return (
    <>
      {divArray.map((component) => (
        <DivStyleConteiner {...props.DivStyleConteiner} key={component.id}>
          <>
            <OrderDiv {...props.OrderLeft}>{component.left}</OrderDiv>
            <OrderDiv {...props.OrderRight}>{component.right}</OrderDiv>
          </>
        </DivStyleConteiner>
      ))}
    </>
  );
}
export default CastomDiv;
