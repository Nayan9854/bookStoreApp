import React from 'react'
import banner from '../../public/Banner.jpg'; // Assuming you have a CSS file for styles
function Banner({ isDark }) {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        {/* Dark panel in dark mode; light in light mode. Image remains unchanged */}
        <div className={`flex flex-col md:flex-row rounded-xl p-6 md:p-10 ${isDark ? 'bg-slate-900 text-white' : 'bg-white text-black'}`}>
        <div className={`mt-32 md:mt-64 ${isDark ? 'bg-slate-900' : 'bg-white'}`}></div>
        <div className='w-full order-2 md:order-1 md:w-1/2'>
          <div className='space-y-12'>
            <h1 className='text-4xl font-bold mt-16 md:mt-24'>
          Hello, welcomes here to learn something <span className='text-pink-500'>new everyday !!!</span>
          </h1>
          <p className='text-xl'>
          Lorem ipsum  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </p>
          <div className='w-full md:w-3/4'>
            <label className={`flex items-center gap-2 px-3 py-2 rounded-md border ${isDark ? 'bg-slate-800 text-white border-black' : 'bg-white text-gray-800'}`}>
              <svg className={`h-5 w-5 opacity-60 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                  <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                  <path d="m22 7-10 6L2 7"></path>
                </g>
              </svg>
              <input type="email" className={`flex-1 outline-none bg-transparent ${isDark ? 'text-white placeholder-gray-400' : 'text-gray-800 placeholder-gray-500'}`} placeholder="mail@site.com" required />
            </label>
          </div>         
          </div>
          <button className="mt-6 px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors">
            Secondary
          </button>
        </div> 
        {/* Keep image normal in both themes */}
        <div className='w-full md:order-2 md:w-1/2 flex items-start justify-center '>
          <img src={banner} className="w-full max-w-[520px] h-auto select-none mt-16 md:mt-24 rounded-lg" alt="Books" />
        </div>
        </div>
      </div>
    </>
  ) ;
}

export default Banner ;
  