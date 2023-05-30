import React, { useState, useEffect } from "react";
import {
  DivStyleConteiner,
  TextStyle,
  ImgStyle,
} from "../../A1_Castom_Components/Style";
function Block5() {
  const [divBlock, setDivBlock] = useState(false);
  const styleDivConteiner = {
    position: "relative",
    display: "block",
    margin: "0 0 0 0",
    width: "100%",
    height: "600px",
    backgroundImage: `url(${process.env.PUBLIC_URL}/image/Group25.jpg)`,
    backgroundPosition: "fixed",
    backgroundAttachment: "center",
  };
  const styleDivTextBlock = {
    position: "absolute",
    top: "200px",
    left: divBlock ? "0" : "300px",
    display: "block",
    margin: "0 0 0 0",
  };
  const styleImg = {
    width: "70px",
    height: "70px",
  };
  const styleRedText = {
    color: "red",
    fontSize: "35px",
    fontWeight: "normal",
    lineHeight: "10px",
    margin: "0 0 15% 0",
  };
  const styleBigText = {
    fontSize: "110px",
    fontWeight: "600",
    lineHeight: "10px",
    margin: "0 0 15% 0",
  };

  const handleDivBlock = () => {
    if (window.innerWidth <= 1050) {
      setDivBlock(true);
    } else {
      setDivBlock(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleDivBlock);
    handleDivBlock();
    return () => {
      window.removeEventListener("resize", handleDivBlock);
    };
  }, []);
  return (
    <>
      <DivStyleConteiner style={styleDivConteiner}>
        <DivStyleConteiner style={styleDivTextBlock}>
          <TextStyle style={styleRedText}>Describe your project</TextStyle>
          <TextStyle style={styleBigText}>Call Liana Nsan</TextStyle>
          <ImgStyle
            src={process.env.PUBLIC_URL + "/image/Group 3 — copy.png"}
            style={styleImg}
          />
        </DivStyleConteiner>
      </DivStyleConteiner>
    </>
  );
}
export default Block5;
