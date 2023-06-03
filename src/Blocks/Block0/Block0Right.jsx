import { ImgStyle, DivStyleConteiner } from "../../A1_Castom_Components/Style";
import styled, { keyframes } from "styled-components";
import "./Block0.css";
function Block0Right() {
  const StyleDivConteiner = {
    position: "relative",
    display: "block",
    margin: "10% 0 0 0",
  };
  const styleBigImg = {
    width: "600px",
    height: "700px",
  };
  const styleAImg = {
    position: "absolute",
    top: "320px",
    left: "-50px",
    width: "100px",
    height: "100px",
  };
  const styleRoteteImg = {
    position: "absolute",
    top: "200px",
    left: "-170px",
    width: "350px",
    height: "350px",
  };

  const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

  const RotatingImage = styled(ImgStyle)`
    animation: ${rotateAnimation} 8s linear infinite;
  `;
  return (
    <DivStyleConteiner {...StyleDivConteiner}>
      <ImgStyle
        {...styleBigImg}
        src={process.env.PUBLIC_URL + "/image/Group 7.png"}
      />
      <ImgStyle {...styleAImg} src={process.env.PUBLIC_URL + "/image/A.png"} />
      <RotatingImage
        {...styleRoteteImg}
        src={process.env.PUBLIC_URL + "/image/Linked Path Group.png"}
      />
    </DivStyleConteiner>
  );
}
export default Block0Right;
