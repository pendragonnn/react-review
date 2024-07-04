import React, { useEffect, useRef, useState } from 'react'
import InputForm from '../Elements/Input'
import MyFirstComponentButton from '../Elements/Buttons/FirstComponentButton'
import { login } from '../../services/auth.service'


export default function FormLogin() {
  const [loginFailed, setLoginFailed] = useState("")

  const handleLogin = (event) => {
    event.preventDefault()
    // localStorage.setItem('email', event.target.email.value)
    // localStorage.setItem('password', event.target.password.value)
    const data = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    login(data, (status, res) => {
      if(status) {
        localStorage.setItem("token", res)
        window.location.href = "/products"
      } else {
        setLoginFailed(res.response.data)
      }
    })
  }

  const usernameRef = useRef(null)

  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label={'Username'}
        name={'username'}
        type={'text'}
        placeholder={'JohnDoe'}
        ref={usernameRef}
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
      {loginFailed && (
        <p className='text-red-500 text-center mt-5'>{loginFailed}</p>
      )}
    </form>
  )
}
