import React from 'react'

function Input({ type, placeholder, name }, ref) {
  return (
    <input
      type={type}
      className='text-sm border rounded w-full py-2 px-2 text-slate-700 placeholder:opacity-50'
      placeholder={placeholder}
      name={name}
      ref={ref}
    />
  )
}

export default React.forwardRef(Input)