import React from 'react'
import Course from '../components/Course'
import Footer from '../components/Footer'

function Courses({ isDark }) {
  return (
   <>
   <div className={`min-h-screen ${isDark ? 'bg-slate-900 text-white' : 'bg-white text-black'}`}>
     <Course isDark={isDark} />
   </div>
   <Footer isDark={isDark} />
   </>
  )
}

export default Courses
