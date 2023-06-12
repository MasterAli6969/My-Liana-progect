import HeaderDesktopAndMobileBurgerMenu from "./Web_content/A1_HeaderNav/HeaderDesktopAndMobileBurgerMenu";
import Block0 from "./Web_content/Block0/Block0";
import Block1 from "./Web_content/Blocks/Block1/Block1";
import Block2 from "./Web_content/Blocks/Block2/Block2";
import DeskSlider from "./Web_content/Slider/Slider";
import Block3 from "./Web_content/Blocks/Block3/Block3";
import Block4 from "./Web_content/Blocks/Block4/Block4";
import Block5 from "./Web_content/Blocks/Block5/Block5";
import Footer from "./Web_content/Z1Footer/Footer";
import FooterDown from "./Web_content/Z2FooterDown/FooterDown";
import AnimatedWrapper from "./A1_Castom_Components/AnimatedWrapper/AnimatedWrapper";
import UpButton from "./Web_content/UpButton/UpButton";
function App() {
  return (
    <>
      <HeaderDesktopAndMobileBurgerMenu />
      <Block0 />

      <AnimatedWrapper>
        <Block1 />
      </AnimatedWrapper>

      <AnimatedWrapper>
        <Block2 />
      </AnimatedWrapper>

      <DeskSlider />

      <AnimatedWrapper>
        <Block3 />
      </AnimatedWrapper>

      <AnimatedWrapper>
        <Block4 />
      </AnimatedWrapper>

      <Block5 />

      <Footer />

      <FooterDown />
      <UpButton />
    </>
  );
}

export default App;
