import React from 'react'
import InputForm from '../Elements/Input'
import MyFirstComponentButton from '../Elements/Buttons/FirstComponentButton'


export default function FormLogin() {
  return (
    <form action="">
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

      <MyFirstComponentButton classname='bg-blue-600 w-full' text='Login'>
        Login
      </MyFirstComponentButton>
    </form>
  )
}
