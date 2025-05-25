import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [user, setUser] = useState(localStorage.getItem('user'));

  useEffect(() => {
    const handleStorageChange = () => {
      setUser(localStorage.getItem('user'));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/Home" /> : <Navigate to="/Login" />}
        />
        <Route
          path="/Login"
          element={<Login setUser={setUser} />}
        />
        <Route
          path="/Register"
          element={<Register setUser={setUser} />}
        />
        <Route
          path="/Home"
          element={user ? <Home /> : <Navigate to="/Login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
