import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Login_Register.css';
import { supabase } from '../supabase';
import imagenLogin from '../assets/instagram-web-lox-image-removebg-preview.png';
import imagenLogo from '../assets/InstagramLogoBlanco.png';

const Login = ({ setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const { data, error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) throw error;

            // Guardar email o token en localStorage
            localStorage.setItem('user', data.user.email);

            // Actualizar el estado user en App.jsx
            setUser(data.user.email);

            // Navegar a home
            navigate('/home');
        } catch (error) {
            alert(error.message);
        }
    };


    return (
        <div className="login-container">
            <div className="caja1">
                <div className="caja2">
                    <img src={imagenLogin} alt="Instagram" />
                </div>
                <div className="caja3">
                    <img src={imagenLogo} alt="Instagram" />
                    <form onSubmit={handleLogin}>
                        <input
                            type="email"
                            placeholder="Email"
                            className="input1"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="input1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" className="btn-login">Iniciar sesión</button>
                    </form>
                    <span>o</span>
                    <p>¿No tienes una cuenta? <a href="/register">Regístrate</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
