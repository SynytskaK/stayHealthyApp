import './NavBar.css';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileCard from '../ProfileCard/ProfileCard';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);

    const handleClick = () => setClick(!click);

    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
        sessionStorage.removeItem("appointment");
        setIsLoggedIn(false);
        // setUsername("");

        // Remove the reviewFormData from local storage
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith("reviewFormData_")) {
                localStorage.removeItem(key);
            }
        }
        // setEmail('');
        window.location.reload();
    }

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    useEffect(() => {
        const name = sessionStorage.getItem("name");

        if (name) {
            setIsLoggedIn(true);
            setUsername(name);
        }
    }, []);

    return (
        <div className='nav'>
            <div>
                <Link to="/">
                    <img src='/logo.png'/>
                </Link>
            </div>

            <div className="nav__icon" onClick={handleClick}>
                <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>


            <ul className={click ? 'nav__links active' : 'nav__links'}>
                <li className="link">
                    <Link to='/'>
                        Home
                    </Link>
                </li>

                <li className="link">
                    <Link to='instant-consultation'>
                    Appointments
                    </Link>
                </li>
                <li className="link">
                    Health Blog
                </li>
                <li className="link">
                    <Link to='review'>
                    Reviews
                    </Link>
                </li>

                {isLoggedIn ? (
                    <>
                        <li className="link gap">
                            <button className='underline' onClick={handleDropdown}>Welcome, <span className='orangeText'>{username}</span></button>
                            {showDropdown && <ProfileCard setShowDropdown={setShowDropdown}/>}
                            <button className="btn1" onClick={handleLogout}>
                                Logout
                            </button>
                        </li>

                    </>
                ) : (
                    <>
                        <li className="link">
                            <Link to="/signup">
                                <button className="btn1">Sign Up</button>
                            </Link>
                        </li>
                        <li className="link">
                            <Link to="/login">
                                <button className="btn1">Login</button>
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </div>
    )
}

export default Navbar;