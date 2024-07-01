import React, { useState } from 'react'
import FirstComponentButton from '../components/Elements/Buttons/FirstComponentButton'
import CardProduct from '../components/Fragments/CardProduct'
import Counter from '../components/Fragments/Counter'

const products = [
  {
    id: 1,
    name: 'Sepatu Baru',
    price: 1000000,
    image: '/images/shoes-1.jpg',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iste amet illum consequuntur est suscipit quam laudantium soluta, maxime quas, id sed laborum saepe. Debitis ex reprehenderit totam fuga dolor."
  },
  {
    id: 2,
    name: 'Sepatu Lama',
    price: 500000,
    image: '/images/shoes-1.jpg',
    description: "Lorem ipsum dolor sit amet consectetur"
  },
  {
    id: 3,
    name: 'Sepatu Keren',
    price: 2000000,
    image: '/images/shoes-1.jpg',
    description: "Ipsum dolor sit amet consectetur"
  },
]

const email = localStorage.getItem('email')

export default function ProductsPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ])

  const handleLogout = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('password')
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
  return (
    <>
      <div className='flex justify-end h-20 bg-blue-600 text-white items-center px-10'>{email}
        <FirstComponentButton classname='ml-5 bg-black' text='Logout' onClick={handleLogout} />
      </div>
      <div className='flex justify-center py-5'>
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image}></CardProduct.Header>
              <CardProduct.Body title={product.name}>
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
              {cart.map((item) => {
                const product = products.find((product) => product.id === item.id)
                return(
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>Rp {product.price.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</td>
                    <td>{item.qty}</td>
                    <td>Rp {(item.qty * product.price).toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</td>
                  </tr>
                )

              })}
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
