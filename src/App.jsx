import './App.css'
import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import Features from "./components/Features.jsx";
import ChatBot from './components/ChatBot.jsx';
import About from "./components/About.jsx"
function App() {

  return (
    <>
        <div className="App">
            <Header />
            <Banner />
            <About/>
            <Features />
            <ChatBot/>
        </div>
    </>
  )
}

export default App
