import React from 'react'
import FirstComponentButton from '../Elements/Buttons/FirstComponentButton'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cartSlice'

export default function CardProduct({ children }) {
  return (
    <div className='w-ull max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow flex flex-col justify-between mx-5 my-2'>
      {children}
    </div>
  )
}

const Header = ({ image,id }) => {
  return (
    <Link to={`/product/${id}`}>
      <img src={image} alt="product" className='p-8 rounded-t-lg h-60 w-full object-cover' />
    </Link>
  )
}

const Body = ({children, title}) => {
  return (
    <div className='px-5 pb-5 h-full'>
      <a href="">
        <h5 className='text-xl font-semibold tracking-high text-white'>{title.substring(0,20)} ...</h5>
        <p className='text-m text-white'>
          {children.substring(0,100)}
        </p>
      </a>
    </div>
  )
}

const Footer = ({ price, id }) => {
  const dispatch = useDispatch()
  return (
    <div className='flex items-center justify-between px-5 pb-5'>
      <span className='text-xl font-bold text-white'>
        $ {price.toLocaleString('id-ID', {styles: 'currency', currency: 'USD'})}
      </span>
      <FirstComponentButton classname='bg-blue-600' text='Add to cart' onClick={() => dispatch(addToCart({id, qty: 1}))} />
    </div>
  )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer
