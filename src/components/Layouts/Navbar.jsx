import React, { useContext, useEffect, useState } from 'react'
import FirstComponentButton from '../Elements/Buttons/FirstComponentButton'
import { useLogin } from '../../hooks/useLogin'
import { useSelector } from 'react-redux'
import { DarkMode } from '../../context/DarkMode'

export default function Navbar() {
  const username = useLogin()
  const [totalCart, setTotalCart] = useState(0)
  const cart = useSelector((state) => state.cart.data)
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode)

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty
    }, 0)
    setTotalCart(sum)
  }, [cart])

  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.href = '/login'
  }

  return (
    <div className='flex justify-end h-20 bg-blue-600 text-white items-center px-10'>
        {username}
      <FirstComponentButton classname='ml-5 bg-black' text='Logout' onClick={handleLogout} />
      <button className='bg-black px-10 mx-5 text-white rounded' onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "Light" : "Dark"}
        </button>
      <div className='flex items-center bg-gray-800 p-2 rounded-md ml-5'>
        {totalCart}
      </div>
    </div>
  )
}
