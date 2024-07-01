import React from 'react'
import InputForm from '../Elements/Input'
import MyFirstComponentButton from '../Elements/Buttons/FirstComponentButton'


export default function FormLogin() {
  const handleLogin = (event) => {
    event.preventDefault()
    localStorage.setItem('email', event.target.email.value)
    localStorage.setItem('password', event.target.password.value)
    window.location.href = "/product"
  }

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label={'Email'}
        name={'email'}
        type={'email'}
        placeholder={'example@gmail.com'}
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
