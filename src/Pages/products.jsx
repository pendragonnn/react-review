import React, { useEffect, useRef, useState } from 'react'
import FirstComponentButton from '../components/Elements/Buttons/FirstComponentButton'
import CardProduct from '../components/Fragments/CardProduct'
import Counter from '../components/Fragments/Counter'
import { getProducts } from '../services/product.service'
import { getUsername } from '../services/auth.service'
import { useLogin } from '../hooks/useLogin'

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
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [products, setProducts] = useState([])
  const username = useLogin()
  
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || [])
  }, [])

  useEffect(() => {
    getProducts((data) => {
      setProducts(data)
    })
  }, [])

  useEffect(() => {
    if(cart.length > 0 && products.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id)
        return acc + product.price * item.qty
      }, 0)
      setTotalPrice(sum)
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart, products])

  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   if(token) {
  //     setUsername(getUsername(token))
  //   } else {
  //     window.location.href = '/login'
  //   }
  // })


  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.href = '/login'
  }

  const handleAddToCart = (id) => {
    if(cart.find(item => item.id === id)) {
      setCart(
        cart.map(item => item.id === id ? {...item, qty: item.qty+1} : item)
      )
    } else {
      setCart(
        [...cart, {id, qty:1}]
      )
    }
  }

  // useRef
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || [])

  const handleAddToCartRef = (id) => {
    cartRef.current = [...cartRef.current, {id, qty:1}]
    localStorage.setItem("cart", JSON.stringify(cartRef.current))
  }

  const totalPriceRef = useRef(null)

  useEffect(() => {
    if(cart.length > 0) {
      totalPriceRef.current.style.display = "table-row"
    } else {
      totalPriceRef.current.style.display = "none"
    }
  }, [cart])

  return (
    <>
      <div className='flex justify-end h-20 bg-blue-600 text-white items-center px-10'>{username}
        <FirstComponentButton classname='ml-5 bg-black' text='Logout' onClick={handleLogout} />
      </div>
      <div className='flex justify-center py-5'>
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 && products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} id={product.id}></CardProduct.Header>
              <CardProduct.Body title={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
            </CardProduct>
          ))}
        </div>
        <div className='w-2/6'>
          <h1 className='text-3xl font-bold text-blue-600 ml-5 mb-2'>Cart</h1>
          <table className='text-left table-auto border-separate border-spacing-x-5'>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 && cart.map((item) => {
                const product = products.find((product) => product.id === item.id)
                return(
                  <tr key={item.id}>
                    <td>{product.title.substring(0,10)} ...</td>
                    <td>Rp {product.price.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</td>
                    <td>{item.qty}</td>
                    <td>$ {(item.qty * product.price).toLocaleString('id-ID', {styles: 'currency', currency: 'USD'})}</td>
                  </tr>
                )

              })}
              <tr  className='font-bold' ref={totalPriceRef}>
                <td colSpan={3}>Total Price</td>
                <td>$ {totalPrice.toLocaleString('id-ID', {styles: 'currency', currency: 'USD'})}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className='flex w-100 justify-center'>
        <Counter />
      </div> */}
    </>
  )
}
