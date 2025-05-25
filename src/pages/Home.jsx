import React, { useState, useEffect } from 'react';
import '../style/Home.css';
import { Link } from 'react-router-dom';
import Stories from '../components/Stories';
import Feed from '../components/Feed';


const Home = () => {
    const [HomeMax, setHomeMax] = useState(false);
    const [HomeMini, setHomeMini] = useState(false);
    const [mainMin, setMainMin] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [ocultos, setOcultos] = useState(false);

    useEffect(() => {
        if (window.innerWidth <= 320) {
            setHomeMini(true);
            setMainMin(true);
            setOcultos(true);
        }
    }, []);

    const toggleMenu = () => {
        setHomeMax(!HomeMax);
        setMenuOpen(!menuOpen);
        if (window.innerWidth <= 320) {
            setHomeMini(true);
            setMainMin(true);
            setOcultos(true);
        }
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const toggleHome = () => {
        setHomeMini(!HomeMini);
        setMainMin(!mainMin);
        setOcultos(!ocultos);
    };

    return (
        <div className={`app ${darkMode ? 'dark-mode bb' : ''}`}>
            <div className="menu" onClick={toggleMenu}>
                <ion-icon name="menu-outline" style={{ display: menuOpen ? 'none' : 'block' }}></ion-icon>
                <ion-icon name="close-outline" style={{ display: menuOpen ? 'block' : 'none' }}></ion-icon>
            </div>

            <div className={`barra-lateral ${HomeMax ? 'max-barra-lateral' : ''} ${HomeMini ? 'mini-barra-lateral' : ''}`}>
                <div>
                    <div className="nombre-pagina" onClick={toggleHome}>
                        <ion-icon name="logo-instagram"></ion-icon>
                        <span style={{ fontFamily: 'Lobster, cursive' }} className={ocultos ? 'oculto' : ''}>Instagram</span>
                    </div>
                    <button className="boton">
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <span className={ocultos ? 'oculto' : ''}>Create new</span>
                    </button>
                </div>

                <nav className="navegacion">
                    <ul>
                        {[
                            ['home-outline', 'Home', '/home'],
                            ['search-outline', 'Search', '/buscar'],
                            ['paper-plane-outline', 'Explore', '/explorar'],
                            ['document-text-outline', 'Reels', '/reels'],
                            ['bookmark-outline', 'Messages', '/mensajes'],
                            ['alert-circle-outline', 'Notifications', '/notificaciones'],
                        ].map(([icon, label, url]) => (
                            <li key={label}>
                                <a href={url}>
                                    <ion-icon name={icon}></ion-icon>
                                    <span className={ocultos ? 'oculto' : ''}>{label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <div className="linea"></div>

                    <div className="modo-oscuro" onClick={toggleDarkMode}>
                        <div className="info">
                            <ion-icon name="moon-outline"></ion-icon>
                            <span className={ocultos ? 'oculto' : ''}>Dark Mode</span>
                        </div>
                        <div className="switch">
                            <div className="base">
                                <div className={`circulo ${darkMode ? 'prendido' : ''}`}></div>
                            </div>
                        </div>
                    </div>

                    <Link to="/perfil" className="usuario">
                        <img src="/img-user.jpeg" alt="usuario" />
                        <div className="info-usuario">
                            <div className="nombre-email">
                                <span className="nombre">User</span>
                            </div>
                            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                        </div>
                    </Link>
                </div>
            </div>

            <main className={mainMin ? 'min-main' : ''}>
                <Stories />
                <Feed />

            </main>

            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
            <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        </div>
    );
};

export default Home;
