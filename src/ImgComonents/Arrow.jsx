import { ImgStyle } from "../A1_Castom_Components/Style";
function Arrow() {
  const styleImg = {
    width: "60px",
    height: "60px",
  };
  return (
    <ImgStyle {...styleImg} src={process.env.PUBLIC_URL + "/image/Group 3 — copy.png"} />
  );
}

export default Arrow;