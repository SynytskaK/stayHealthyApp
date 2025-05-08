import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/NavBar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                <Route path="/" element={<Landing_Page/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
