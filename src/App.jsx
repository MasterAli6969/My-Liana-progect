import HeaderNav from "./Blocks/A1_HeaderNav/HeaderNav";
import Block0 from "./Blocks/Block0/Block0";
import Block1 from "./Blocks/Block1/Block1";
import Block2 from "./Blocks/Block2/Block2";
import DeskSlider from "./Blocks/Slider/Slider";
import Block3 from "./Blocks/Block3/Block3";
import Block4 from "./Blocks/Block4/Block4";
import Block5 from "./Blocks/Block5/Block5";
import Footer from "./Blocks/Z1Footer/Footer";
import FooterDown from "./Blocks/Z2FooterDown/FooterDown";
import AnimatedWrapper from "./A1_Castom_Components/AnimatedWrapper/AnimatedWrapper";
function App() {
  return (
    <div>
      <>
        <HeaderNav />
      </>

      <>
        <Block0 />
      </>

      <AnimatedWrapper>
        <Block1 />
      </AnimatedWrapper>

      <AnimatedWrapper>
        <Block2 />
      </AnimatedWrapper>

      <>
        <DeskSlider />
      </>

      <AnimatedWrapper>
        <Block3 />
      </AnimatedWrapper>

      <AnimatedWrapper>
        <Block4 />
      </AnimatedWrapper>

      <>
        <Block5 />
      </>

      <>
        <Footer />
      </>
      <>
        <FooterDown />
      </>
    </div>
  );
}

export default App;
