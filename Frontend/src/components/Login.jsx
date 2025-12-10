import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form' ;

function Login() {
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    document.getElementById('my_modal_3').close()
  }

  const handleClose = () => {
    document.getElementById('my_modal_3').close()
  }

  return (
    <>
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white p-6 rounded-md shadow-lg">
        <button onClick={handleClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold text-lg">Login</h3>
          
          {/* Email Input */}
          <div className='mt-4 space-y-2'>
            <span>Email</span>
            <br />
            <input type="email" placeholder="Enter your email" className="w-full px-3 py-1 border rounded-md outline-none" {...register("email", { required: true })} />
            <br />
            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
          </div>

          {/* Password Input */}
          <div className='mt-4 space-y-2'>
            <span>Password</span>
            <br />
            <input type="password" placeholder="Enter your password" className="w-full px-3 py-1 border rounded-md outline-none" {...register("password", { required: true })}/>
            <br />
            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
          </div>

          {/* Button */}
          <div className='flex justify-between items-center mt-4'>
            <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
            <span className='text-sm'>
              Not registered?{" "}
              <Link
                to="/signup"
                className='underline text-blue-500 cursor-pointer'
              >
                Signup
              </Link>
            </span>
          </div>
        </form>
      </div>
    </dialog>
    </>
  )
}

export default Login
