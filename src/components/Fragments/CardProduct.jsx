import React from 'react'
import FirstComponentButton from '../Elements/Buttons/FirstComponentButton'

export default function CardProduct({ children }) {
  return (
    <div className='w-ull max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow flex flex-col justify-between mx-5 my-2'>
      {children}
    </div>
  )
}

const Header = ({ image }) => {
  return (
    <a href="">
      <img src={image} alt="product" className='p-8 rounded-t-lg' />
    </a>
  )
}

const Body = ({children, title}) => {
  return (
    <div className='px-5 pb-5 h-full'>
      <a href="">
        <h5 className='text-xl font-semibold tracking-high text-white'>{title}</h5>
        <p className='text-m text-white'>
          {children}
        </p>
      </a>
    </div>
  )
}

const Footer = ({ price, handleAddToCart, id }) => {
  return (
    <div className='flex items-center justify-between px-5 pb-5'>
      <span className='text-xl font-bold text-white'>
        Rp {price.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}
      </span>
      <FirstComponentButton classname='bg-blue-600' text='Add to cart' onClick={() => handleAddToCart(id)} />
    </div>
  )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer
