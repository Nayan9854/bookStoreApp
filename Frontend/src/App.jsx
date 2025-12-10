import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./home/Home.jsx";
import Courses from "./courses/Courses.jsx";
import Signup from "./components/Signup.jsx";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  };

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home isDark={isDark} />} />
        <Route path="/course" element={<Courses isDark={isDark} />} />
         <Route path="/signup" element={<Signup isDark={isDark} />} />
      </Routes>
    </div>
  );
}

export default App;
