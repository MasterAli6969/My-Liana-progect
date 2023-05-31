import React, { useState, useEffect, useRef } from "react";
import "./AnimatedWrapper.css";

function AnimatedWrapper({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const element = elementRef.current;

      if (element) {
        const { top } = element.getBoundingClientRect();
        const elementOffsetTop = scrollTop + top;

        if (scrollTop > elementOffsetTop - windowHeight && scrollTop < elementOffsetTop) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={elementRef} className={`animated-wrapper ${isVisible ? "visible" : "hidden"}`}>
      {children}
    </div>
  );
}

export default AnimatedWrapper;