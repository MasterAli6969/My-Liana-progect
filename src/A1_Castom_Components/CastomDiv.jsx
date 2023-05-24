import { DivStyleConteiner } from "./Style";
function CastomDiv(props) {
  const { divArray } = props;
  return (
    <>
      {divArray.map((component, index) => (
        <DivStyleConteiner {...props.DivStyleConteiner}>
          <div key={index}>{component.left}</div>
          <div key={index}>{component.right}</div>
        </DivStyleConteiner>
      ))}
    </>
  );
}
export default CastomDiv;
