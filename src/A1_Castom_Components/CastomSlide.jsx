import { DivStyleConteiner, ImgStyle, TextStyle } from "./Style";

const styleDivConteinerImg = {
  display: "block",
  margin: "0 0 0 0",
};

const styleImg = {
  width: "80%",
  height: "80%",
};

const StyleText1 = {
  textTransform:"uppercase",
  fontSize: "15px",
  fontWeight: "600",
  margin: "0 0 0 0",
  opacity:"0.6",
  margin: "30px 0 0 0"
};

const StyleText2 = {
    fontSize: "25px",
    fontWeight: "600",
    margin: "0 0 0 0",
    opacity:"0.6",
    margin: "10px 0 0 0"
  };
function CastomSlide(props) {
    const { slideObject } = props;
    const {src, text1, text2} = slideObject;
    return (
        <DivStyleConteiner style={styleDivConteinerImg}>
          <ImgStyle src={src} style={styleImg} />
          <TextStyle style={StyleText1}>{text1}</TextStyle>
          <TextStyle style={StyleText2}>{text2}</TextStyle>
        </DivStyleConteiner>
      );
}
export default CastomSlide;