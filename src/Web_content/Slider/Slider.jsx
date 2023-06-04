import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DivStyleConteiner } from "../../A1_Castom_Components/Style";
import "./Slider.css";
import {
  ImgSlides1,
  ImgSlides2,
  ImgSlides3,
  ImgSlides4,
  ImgSlides5,
  ImgSlides6,
  ImgSlides7,
  ImgSlides8,
  ImgSlides9,
  ImgSlides10,
} from "./imgSlides";

function DeskSlider() {
  const imgArrayOdject = [
    { id: "1", slide: <ImgSlides1 /> },
    { id: "2", slide: <ImgSlides2 /> },
    { id: "3", slide: <ImgSlides3 /> },
    { id: "4", slide: <ImgSlides4 /> },
    { id: "5", slide: <ImgSlides5 /> },
    { id: "6", slide: <ImgSlides6 /> },
    { id: "7", slide: <ImgSlides7 /> },
    { id: "8", slide: <ImgSlides8 /> },
    { id: "9", slide: <ImgSlides9 /> },
    { id: "10", slide: <ImgSlides10 /> },
  ];

  const styleDivConteinerSlider = {
    display: "block",
    width: "80%",
    margin: "0 auto",
  };

  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 800) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(2);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <>
      <DivStyleConteiner style={styleDivConteinerSlider}>
        <Slider {...settings}>
          {imgArrayOdject.map((slides) => (
            <div key={slides.id}>{slides.slide}</div>
          ))}
        </Slider>
        <hr className="global_Line_Style" />
      </DivStyleConteiner>
    </>
  );
}

export default DeskSlider;
