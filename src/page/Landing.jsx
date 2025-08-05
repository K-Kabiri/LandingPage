import CustomButton from "../components/CustomButton.jsx";
import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import About from "../components/About.jsx";
import Features from "../components/Features.jsx";
import ModernDesign from "../components/ModernDesign.jsx";
import FAQ from "../components/FAQ.jsx";
import ChatBot from "../components/ChatBot.jsx";
import HowItWorks from "../components/HowItWorks.jsx";

const Landing = () => {
  return (
      <div className={"w-screen flex flex-col justify-center items-center overflow-x-hidden"}>
          <Header/>
          <Banner />
          <Features />
          <About/>
          <HowItWorks/>
          <ModernDesign/>
          <FAQ/>
          {/*<ChatBot/>*/}
      </div>
  )
}
export default Landing;