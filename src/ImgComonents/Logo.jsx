import { ImgStyle } from "../A1_Castom_Components/Style";
import { TextStyle } from "../A1_Castom_Components/Style";
import { DivStyleConteiner } from "../A1_Castom_Components/Style";
function Logo() {
  const styleDivConteiner = {
    display: "flex",
    margin: "0 0 0 0",
  };
  const styleImg = {
    width: "60px",
    height: "60px",
  };
  const styleText = {
    fontSize: "20px",
    fontWeight: "600",
    textTransform: "uppercase",
    lineHeight: "10px",
    margin: "0 0 0 0",
  };
  return (
    <DivStyleConteiner {...styleDivConteiner}>
      <ImgStyle
        {...styleImg}
        src={process.env.PUBLIC_URL + "/image/logo.png"}
      />
      <TextStyle {...styleText}>
        moonex <br /> labs
      </TextStyle>
    </DivStyleConteiner>
  );
}
export default Logo;
