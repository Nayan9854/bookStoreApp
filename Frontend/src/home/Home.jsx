import React from 'react'
import Banner from '../components/Banner.jsx'
import Freebook from '../components/Freebook.jsx'
import Footer from '../components/Footer.jsx'

function Home({ isDark }) {
  return (
    <div className={`min-h-screen transition-colors ${isDark ? 'bg-slate-900 text-white' : 'bg-white text-black'}`}>
      <Banner isDark={isDark} />
      <Freebook isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  )
}

export default Home
