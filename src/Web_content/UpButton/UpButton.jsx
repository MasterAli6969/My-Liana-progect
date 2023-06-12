import "./UpButton.css";
import React, { useState, useEffect } from "react";
function UpButton() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollPosition >= 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="up_Button_conteiner">
      {isVisible && (
        <img
          className="up_Button"
          src={process.env.PUBLIC_URL + "/image/UpButton.png"}
          onClick={scrollToTop}
        />
      )}
    </div>
  );
}
export default UpButton;
