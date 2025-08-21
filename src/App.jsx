import './App.css';
import Landing from "./page/Landing.jsx";
import 'aos/dist/aos.css';

function App({landingId}) {
    return (
        <div className="App w-screen h-screen m-0 p-0">
            <Landing landingId={landingId}/>
        </div>
    );
}

export default App;
