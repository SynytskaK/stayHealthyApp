import './Sign_Up.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Sign_Up = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState(''); // State to show error messages
    const navigate = useNavigate();


    // Function to handle form submission
    const register = async (e) => {
        e.preventDefault(); // Prevent default form submission
        // API Call to register user
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });
        const json = await response.json(); // Parse the response JSON
        if (json.authtoken) {
            // Store user data in session storage
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);
            // Redirect user to home page
            navigate("/");
            window.location.reload(); // Refresh the page
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    setShowerr(error.msg); // Show error messages
                }
            } else {
                setShowerr(json.error);
            }
        }
    };

    return (
        <div className="wrapper" >
            <div className="signup-wrapper">
                <div>
                    <h1 className="signup-text">Sign Up</h1>
                </div>
                <div className="signup-text1">
                    Already a member? <span><a className="orangeText" href="login"> Login</a></span>
                </div>
                <div className="signup-form">
                    <form method="POST" onSubmit={register}>
                        <div className="form-group">
                            <label htmlFor="role">Role</label>
                            <select id="role" className="form-control">
                                <option value="">Select Role</option>
                                <option value="dog">Doctor</option>
                                <option value="cat">Patient</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" required className="form-control" placeholder="Enter your name" aria-describedby="helpId" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" pattern="\d{10}"
                                maxLength="10" name="phone" id="phone" required className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" required className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                            {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}

                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" required classN="form-control" placeholder="Enter your password" aria-describedby="helpId" />
                        </div>

                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                            <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Sign_Up