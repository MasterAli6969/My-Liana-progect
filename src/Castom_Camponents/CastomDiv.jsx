import { DivStyleConteiner } from "./Style";
function CastomDiv(props) {
  const {costArray} = props;
  return (
    <DivStyleConteiner {...props.DivStyleConteiner}>
      {costArray.map((component, index) => (
        <div key={index}>{component}</div>
      ))}
    </DivStyleConteiner>
  );
}
export default CastomDiv;
