import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
import React, { useState, useEffect } from 'react';

const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem("auth-token")) {
            navigate("/");
        }
    }, []);

    const login = async (e) => {
        e.preventDefault();
        // Надіслати POST-запит до кінцевої точки API для входу
        const res = await fetch(`${API_URL}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });

        const json = await res.json();
        if (json.authtoken) {
            // Якщо отримано токен аутентифікації, зберігайте його в сеансовому сховищі
            sessionStorage.setItem('auth-token', json.authtoken);
            sessionStorage.setItem('email', email);
            // Перенаправити на домашню сторінку та перезавантажити вікно
            navigate('/');
            window.location.reload();
        } else {
            // Обробка помилок, якщо аутентифікація не вдалася
            if (json.errors) {
                for (const error of json.errors) {
                    alert(error.msg);
                }
            } else {
                alert(json.error);
            }
        }
    };

    return (
        <div className="login_wrapper">
            <div className="login-wrapper">
                <div>
                    <h1 className="signup-text">Login</h1>
                </div>
                <div className="signup-text1">
                    Are you a new member? <span><Link to="signup" className='orangeText'>  Sign Up Here</Link></span>
                </div>
                <div className="signup-form">
                    <form onSubmit={login}>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input value={email}
                                onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" required className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                        </div>

                        <div className="form-group">
                            <label for="password">Password</label>
                            <input value={password}
                                onChange={(e) => setPassword(e.target.value)} name="password" id="password" required className="form-control" placeholder="Enter your password" aria-describedby="helpId" />
                        </div>

                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary">Login</button>
                            <button type="reset" className="btn btn-danger">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="reset_password">Forgot Password?</div>
        </div>
    )
}

export default Login;