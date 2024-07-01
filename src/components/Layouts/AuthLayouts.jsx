import React from 'react'
import { Link } from 'react-router-dom'

export default function AuthLayouts({ children, title, type }) {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='w-full max-w-xs'>
        <h1 className='text-blue-600 text-3xl font-bold mb-2'>{title}</h1>
        <p className='font-medium text-slate-500 mb-8'>
          Welcome, Please enter your details
        </p>
        {children}
        {/* <p className='text-sm mt-5 text-center'>
          {type === "login" ? "Don't have an account? " : "Already have an account "}
          {/* <Link to={type === "login" ? "/register" : "/login"} className='font-bold text-blue-600'>
            {type === "login" ? "Register" : "Login"}
          </Link> */}
        {/* {type === "login" && (
            <Link to="/register" className='font-bold text-blue-600'>
              Register
            </Link>
          )}

          {type === "register" && (
            <Link to="/login" className='font-bold text-blue-600'>
              Login
            </Link>
          )} */}
        {/* </p> */}
        <Navigation type={type}/>
      </div>
    </div>
  )
}

const Navigation = ({ type }) => {
  if (type === 'login') {
    return (
      <p className='text-sm mt-5 text-center'>
        Don't have an account?{" "}
        <Link to="/register" className='font-bold text-blue-600'>
          Register
        </Link>
      </p>
    )
  } else {
    return (
      <p className='text-sm mt-5 text-center'>
        Already have an account{" "}
        <Link to="/login" className='font-bold text-blue-600'>
          Login
        </Link>
      </p>
    )
  }
}