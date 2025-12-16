import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login';
import Logout from './Logout.jsx';
import { useAuth } from '../context/AuthProvider.jsx';

function Navbar({ isDark, toggleTheme }) {
  const [authUser, setAuthUser] = useAuth();

  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() =>{
    const handleScroll = () => {
      if (window.scrollY > 0) { 
        setSticky(true);
      } else {
        setSticky(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  },[]);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuItems = [
    { label: 'HOME', path: '/' },
    { label: 'COURSE', path: '/course' },
    { label: 'CONTACT', path: '/contact' },
    { label: 'ABOUT', path: '/about' }
  ]

  return (
    <>
    <div className={`${sticky ? 'fixed top-0 left-0 right-0 z-50 shadow-md' : 'relative'} transition-all duration-300 ease-in-out ${isDark ? 'bg-slate-900 text-white' : 'bg-white text-black'} ${sticky && isDark ? 'border-b border-black' : ''}`}>
      <div className={`flex items-center justify-between px-6 py-4 gap-2 ${isDark ? 'text-white' : ''}`}>
        {/* Mobile Menu Toggle - Left */}
        <button
          onClick={toggleMenu}
          aria-expanded={isOpen}
          className="md:hidden flex flex-col gap-1"
        >
          <span className={`w-6 h-0.5 ${isDark ? 'bg-white' : 'bg-black'} transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 ${isDark ? 'bg-white' : 'bg-black'} transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`w-6 h-0.5 ${isDark ? 'bg-white' : 'bg-black'} transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Logo - Quite left on mobile, hidden on desktop nav */}
        <div className="md:hidden">
          <a className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>BookStore</a>
        </div>

        {/* Desktop Logo - Left */}
        <div className="hidden md:block">
          <a className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>BookStore</a>
        </div>
        
        {/* Desktop Menu, Search and Button - Right side */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          {/* Menu Items */}
          <div className="flex items-center gap-8">
            {menuItems.map((item) => (
              <Link key={item.label} to={item.path} className={`${isDark ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-black'}`}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Search Input */}
          <label className={`flex items-center gap-1 w-55 h-8 rounded-full border mr-3 ${isDark ? 'bg-slate-800 text-white border-black' : 'bg-white border-gray-300'} px-3`}>
            <input type="search" className={`outline-none flex-1 ${isDark ? 'bg-slate-800 text-white placeholder-gray-400' : 'bg-white text-black placeholder-gray-500'}`} placeholder="Search" />
            <svg className={`h-6 w-7 flex-shrink-0 ${isDark ? 'text-white' : 'text-black'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
          </label>

          {/* Theme Toggle - Half Moon */}
          <button
            onClick={toggleTheme}
            className={`text-xl cursor-pointer ${isDark ? 'text-yellow-400' : 'text-gray-800'}`}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          

            {/* Login Button */}

          {authUser ? (
            <Logout />
          ) : (         
            <button className="bg-black text-white px-3 py-2 rounded hover:bg-gray-800 whitespace-nowrap font-bold" 
              onClick={() =>
                document.getElementById('my_modal_3').showModal()   
              }
            >
              Login
            </button>
          )}
          </div>
        

        {/* Mobile: Theme Toggle and Login Button - Right */}
        <div className="md:hidden flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`text-xl cursor-pointer ${isDark ? 'text-yellow-200' : 'text-gray-800'}`}
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          {/* Login Button */}
          <button className="bg-black text-white px-3 py-2 rounded hover:bg-gray-800 whitespace-nowrap text-sm" onClick={() => document.getElementById('my_modal_3').showModal()}>
            Login
          </button>
        </div>
      </div>

        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden ${isDark ? 'bg-slate-900 border-black' : 'bg-white border-gray-200'} border-t px-6 py-4`}>
          <ul className="space-y-3">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link to={item.path} className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} block`} onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Search for Mobile */}
          <div className="mt-4">
            <label className={`flex items-center rounded-full px-3 py-2 border ${isDark ? 'bg-slate-800 border-black' : 'bg-white border-gray-300'}`}>
              <input type="search" className={`outline-none flex-1 ${isDark ? 'bg-slate-800 text-white' : 'bg-white text-black'}`} placeholder="Search" />
              <svg className={`h-5 w-5 opacity-50 ml-2 ${isDark ? 'text-white' : 'text-black'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
            </label>
          </div>
        </div>
    </div>
    <Login isDark={isDark} />
    </>
  )
}

export default Navbar ;
