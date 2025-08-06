import './App.css';
import Landing from "./page/Landing.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <div className="App w-screen h-screen m-0 p-0">
            <Landing />
        </div>
    );
}

export default App;
