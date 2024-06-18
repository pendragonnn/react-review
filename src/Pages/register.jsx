import React from 'react'
import AuthLayouts from '../components/Layouts/AuthLayouts'
import FormRegister from '../components/Fragments/FormRegister'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
  return (
    <AuthLayouts title={'register'}>
      <FormRegister/>
      <p className='text-sm mt-5 text-center'>
        Already have an account? {" "}
        <Link to="/login" className='font-bold text-blue-600'>
          Log In
        </Link>
      </p>
    </AuthLayouts>
  )
}
