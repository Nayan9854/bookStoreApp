import React, { useState, useEffect } from "react";
import { Routes, Route , Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./home/Home.jsx";
import Courses from "./courses/Courses.jsx";
import Signup from "./components/Signup.jsx";
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider.jsx';
function App() {
  
  const [authUser] = useAuth();
  const [isDark, setIsDark] = useState(() => {
    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('theme', JSON.stringify(isDark));
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home isDark={isDark} />} />
        <Route path="/course" element={authUser ? <Courses isDark={isDark} /> : <Navigate to="/signup"   />} />
         <Route path="/signup" element={<Signup isDark={isDark} />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
