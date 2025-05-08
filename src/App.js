import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/NavBar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Login from './Components/Login/Login';
import Sign_Up from './Components/SignUp/Sign_Up';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                <Route path="/" element={<Landing_Page/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="signup" element={<Sign_Up/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
