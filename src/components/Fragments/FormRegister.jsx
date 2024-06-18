import React from 'react'
import InputForm from '../Elements/Input'
import MyFirstComponentButton from '../Elements/Buttons/FirstComponentButton'


export default function FormRegister() {
  return (
    <form action="">
      <InputForm
        label={'Fullname'}
        name={'fullname'}
        type={'text'}
        placeholder={'insert your name here'}
      />

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
      
      <InputForm
        label={'Confirm password'}
        name={'conirmPassword'}
        type={'password'}
        placeholder={'*****'}
      />

      <MyFirstComponentButton classname='bg-blue-600 w-full' text='register'>
        Register
      </MyFirstComponentButton>
    </form>
  )
}
