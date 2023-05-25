import { DivStyleConteiner } from "./Style";
function CastomDiv(props) {
  const { divArray } = props;
  return (
    <>
      {divArray.map((component) => (
        <DivStyleConteiner {...props.DivStyleConteiner} key={component.id}>
          <div>{component.left}</div>
          <div>{component.right}</div>
        </DivStyleConteiner>
      ))}
    </>
  );
}
export default CastomDiv;
