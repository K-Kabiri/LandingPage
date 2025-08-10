import './App.css';
import Landing from "./page/Landing.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {
    return (
        <div className="App w-screen h-screen m-0 p-0">
            <Landing />
        </div>
    );
}

export default App;
