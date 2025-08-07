import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import About from "../components/About.jsx";
import Features from "../components/Features.jsx";
import ModernDesign from "../components/ModernDesign.jsx";
import FAQ from "../components/FAQ.jsx";
import ChatBot from "../components/ChatBot.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Footer from "../components/Footer.jsx";
import UI from "../components/UI.jsx";
import Companies from "../components/Companies.jsx";
import ContactUs from "../components/ContactUs.jsx";
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
          <UI/>
          <Companies/>
          <ContactUs/>
          <ChatBot/>
          <Footer/>
      </div>
  )
}
export default Landing;