import React from 'react'
import Cards  from './Cards' 
import { Link } from 'react-router-dom';  
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config.js';

function Course({ isDark }) {
  const [book , setBook] = useState([]) ;
  useEffect(() => {
    const getBook = async() => {
      try {
        const res = await axios.get(`${API_BASE_URL}/book`) ;
        console.log(res.data) ;
        setBook(res.data) ;
      } catch (error) {
        console.log("Error fetching books:", error) ;
      }
    }
    getBook() ;
  } , []) ;
  return (
   <>
   <div className={`${isDark ? 'dark:bg-slate-900 dark:text-white' : ''} max-w-screen-2xl container mx-auto md:px-20 px-4`}> 
    <div className={`h-28 ${isDark ? 'bg-slate-900' : 'bg-white'}`}></div>
    <div className='items-center justify-center text-center'>
      <h1 className='text-2xl md:text-4xl'> We're delighted to have you <span className='bg-pink-500'>here! :)</span></h1>
      <p className='mt-12'> lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <Link to="/">
      <button className=' mt-6 bg-pink-500  text-white px-4 py-2   rounded-full hover:bg-pink-700   duration-200 '>Back</button>
      </Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-6'>
       {book.map((item) =>(
          <Cards   key={item.id}  item={item} isDark={isDark} />
        )) }
    </div>
   </div>
   </>
  )
}

export default Course
