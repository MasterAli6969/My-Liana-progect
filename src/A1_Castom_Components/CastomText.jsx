import { TextStyle, DivStyleConteiner } from "./Style";
function CastomText(props) {
  const { textArray } = props;
  return (
    <DivStyleConteiner {...props.DivStyleConteiner}>
      {textArray.map((text, index) => (
        <TextStyle {...props.TextStyle} key={index}>
          {text}
        </TextStyle>
      ))}
    </DivStyleConteiner>
  );
}

export default CastomText;
