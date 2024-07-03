import React, { useEffect, useRef } from 'react'
import InputForm from '../Elements/Input'
import MyFirstComponentButton from '../Elements/Buttons/FirstComponentButton'


export default function FormLogin() {
  const handleLogin = (event) => {
    event.preventDefault()
    localStorage.setItem('email', event.target.email.value)
    localStorage.setItem('password', event.target.password.value)
    window.location.href = "/product"
  }

  const emailRef = useRef(null)

  useEffect(() => {
    emailRef.current.focus()
  }, [])

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label={'Email'}
        name={'email'}
        type={'email'}
        placeholder={'example@gmail.com'}
        ref={emailRef}
      />

      <InputForm
        label={'Password'}
        name={'password'}
        type={'password'}
        placeholder={'*****'}
      />

      <MyFirstComponentButton classname='bg-blue-600 w-full' text='Login' type='submit'>
        Login
      </MyFirstComponentButton>
    </form>
  )
}
