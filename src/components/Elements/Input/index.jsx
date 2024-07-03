import React from 'react'
import Label from './Label'
import Input from './Input'

function InputForm({ label, type, name, placeholder }, ref) {
  return (
    <div className='mb-6'>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} ref={ref}/>
    </div>
  )
}

export default React.forwardRef(InputForm)