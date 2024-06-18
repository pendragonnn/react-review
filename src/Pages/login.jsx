import React from 'react'
import AuthLayouts from '../components/Layouts/AuthLayouts'
import FormLogin from '../components/Fragments/FormLogin'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <AuthLayouts title={'login'}>
      <FormLogin/>
      <p className='text-sm mt-5 text-center'>
        Don't have an account? {" "}
        <Link to="/register" className='font-bold text-blue-600'>
          Register
        </Link>
      </p>
    </AuthLayouts>
  )
}
