import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form' ;

function Signup({ isDark }) {
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  useEffect(() => {
    // Close login modal when signup page loads
    const loginModal = document.getElementById('my_modal_3')
    if (loginModal) {
      loginModal.close()
    }
    // Disable scrolling on signup page
    document.body.style.overflow = 'hidden'
    
    return () => {
      // Re-enable scrolling when leaving signup page
      document.body.style.overflow = 'auto'
    }
  }, [])
  return (
    <>
    <div className={`flex h-screen items-center justify-center ${isDark ? 'bg-slate-900' : 'bg-white'}`}>  
    <div  className={`border-[2px] shadow-md p-5 rounded-md ${isDark ? 'bg-slate-900 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}>
      <div className="modal-box">
        <div className='flex justify-between items-center mb-4'>
          <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-black'}`}>Signup</h3>
          <Link 
          to="/" className="btn btn-sm btn-circle btn-ghost">✕</Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        {/* name Input */}
        <div className='mt-4 space-y-2'>
          <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Name</span>
          <br />
          <input type="text" placeholder="Enter your name" className={`w-80 px-3 py-1 border rounded-md outline-none ${isDark ? 'bg-slate-800 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`} {...register("name", { required: true })} />
          <br />
          {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
        {/* Email Input */}
        <div className='mt-4 space-y-2'>
          <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Email</span>
          <br />
          <input type="email" placeholder="Enter your email" className={`w-80 px-3 py-1 border rounded-md outline-none ${isDark ? 'bg-slate-800 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`} {...register("email", { required: true })} />
          <br />
          {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
        {/* Password Input */}
        <div className='mt-4 space-y-2'>
          <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Password</span>
          <br />
          <input type="password" placeholder="Enter your password" className={`w-80 px-3 py-1 border rounded-md outline-none ${isDark ? 'bg-slate-800 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`} {...register("password", { required: true })}/>
          <br />
          {errors.password && <span  className='text-sm text-red-500'>This field is required</span>}
        </div>
        {/* Button */}
        <div className='flex justify-between items-center mt-4'>
          <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
          <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Have Account?{" "}
            <button        
              className='underline text-blue-500 cursor-pointer'
              onClick={()=> document.getElementById('my_modal_3').showModal()}
            >
              Login
            </button>
          </span>
        </div>
        </form>
      </div>
    </div>
    </div>
    </>
  )
}

export default Signup
