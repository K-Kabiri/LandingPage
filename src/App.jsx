import './App.css'
import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import Features from "./components/Features.jsx";
import About from "./components/About.jsx";
import ModernDesign from "./components/ModernDesign.jsx";
import FAQ from "./components/FAQ.jsx";
import ChatBot from "./components/ChatBot.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
function App() {

  return (
    <>
        <div className="App w-screen h-screen m-0 p-0" >
            <Header/>
            <Banner />
            <About/>
            <Features />
            <ModernDesign/>
            <FAQ/>
            <ChatBot/>
        </div>
    </>
  )
}

export default App
