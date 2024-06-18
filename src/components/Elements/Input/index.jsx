import React from 'react'
import Label from './Label'
import Input from './Input'

export default function InputForm({ label, type, name, placeholder }) {
  return (
    <div className='mb-6'>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  )
}
