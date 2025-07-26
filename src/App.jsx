import './App.css'
import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import Features from "./components/Features.jsx";
import About from "./components/About.jsx";

function App() {

  return (
    <>
        <div className="App max-w-screen mx-auto" >
            <Header />
            <Banner />
            <Features />
            <About />
        </div>
    </>
  )
}

export default App
