import React, { useContext, useEffect, useRef, useState } from 'react'
import FirstComponentButton from '../components/Elements/Buttons/FirstComponentButton'
import CardProduct from '../components/Fragments/CardProduct'
import Counter from '../components/Fragments/Counter'
import { getProducts } from '../services/product.service'
import { getUsername } from '../services/auth.service'
import { useLogin } from '../hooks/useLogin'
import TableCart from '../components/Fragments/TableCart'
import Navbar from '../components/Layouts/Navbar'
import { DarkMode } from '../context/DarkMode'

// const products = [
//   {
//     id: 1,
//     name: 'Sepatu Baru',
//     price: 1000000,
//     image: '/images/shoes-1.jpg',
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iste amet illum consequuntur est suscipit quam laudantium soluta, maxime quas, id sed laborum saepe. Debitis ex reprehenderit totam fuga dolor."
//   },
//   {
//     id: 2,
//     name: 'Sepatu Lama',
//     price: 500000,
//     image: '/images/shoes-1.jpg',
//     description: "Lorem ipsum dolor sit amet consectetur"
//   },
//   {
//     id: 3,
//     name: 'Sepatu Keren',
//     price: 2000000,
//     image: '/images/shoes-1.jpg',
//     description: "Ipsum dolor sit amet consectetur"
//   },
// ]

export default function ProductsPage() {
  // const [cart, setCart] = useState([])
  // const [totalPrice, setTotalPrice] = useState(0)
  const [products, setProducts] = useState([])
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode)
  useLogin()
  
  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || [])
  // }, [])

  useEffect(() => {
    getProducts((data) => {
      setProducts(data)
    })
  }, [])

  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   if(token) {
  //     setUsername(getUsername(token))
  //   } else {
  //     window.location.href = '/login'
  //   }
  // })

  // const handleAddToCart = (id) => {
  //   if(cart.find(item => item.id === id)) {
  //     setCart(
  //       cart.map(item => item.id === id ? {...item, qty: item.qty+1} : item)
  //     )
  //   } else {
  //     setCart(
  //       [...cart, {id, qty:1}]
  //     )
  //   }
  // }

  // // useRef
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || [])

  // const handleAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, {id, qty:1}]
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current))
  // }

  // const totalPriceRef = useRef(null)

  // useEffect(() => {
  //   if(cart.length > 0) {
  //     totalPriceRef.current.style.display = "table-row"
  //   } else {
  //     totalPriceRef.current.style.display = "none"
  //   }
  // }, [cart])

  return (
    <>
      <Navbar />
      <div className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900" }`}>
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 && products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} id={product.id}></CardProduct.Header>
              <CardProduct.Body title={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price} id={product.id} />
            </CardProduct>
          ))}
        </div>
        <div className='w-2/6'>
          <h1 className='text-3xl font-bold text-blue-600 ml-5 mb-2'>Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
      {/* <div className='flex w-100 justify-center'>
        <Counter />
      </div> */}
    </>
  )
}
