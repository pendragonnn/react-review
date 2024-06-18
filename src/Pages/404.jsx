import React from 'react'
import { useRouteError  } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()

  return (
    <div className='flex justify-center min-h-screen items-center flex-col'>
      <h1 className='font-bold text-3xl'>Oops!</h1>
      <p className='my-5 text-xl'>Sorry, an unecpected error has occured</p>
      <p className='text-lg'>{error.statusText || error.message}</p>
    </div>
  )
}
