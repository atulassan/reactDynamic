import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../Components/Modules/AuthContext';

function Login() {

const { login } = useAuth();
const [loginData, setLoginData] = useState({});
const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login Data:', loginData);
        login({ username: loginData.username, password: loginData.password });
        console.log('User logged in successfully');
        setLoginData({});
        navigate('/dashboard'); // Redirect to dashboard after login
    }

    return (
        <div className="login-container">
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" onChange={handleChange} required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;