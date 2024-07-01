import React from 'react'
import FirstComponentButton from '../components/Elements/Buttons/FirstComponentButton'
import CardProduct from '../components/Fragments/CardProduct'

const products = [
  {
    id: 1,
    name: 'Sepatu Baru',
    price: 'Rp 1.000.000',
    image: '/images/shoes-1.jpg',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iste amet illum consequuntur est suscipit quam laudantium soluta, maxime quas, id sed laborum saepe. Debitis ex reprehenderit totam fuga dolor."
  },
  {
    id: 2,
    name: 'Sepatu Lama',
    price: 'Rp 500.000',
    image: '/images/shoes-1.jpg',
    description: "Lorem ipsum dolor sit amet consectetur"
  },
  {
    id: 3,
    name: 'Sepatu Keren',
    price: 'Rp 500.000',
    image: '/images/shoes-1.jpg',
    description: "Ipsum dolor sit amet consectetur"
  },
]

const email = localStorage.getItem('email')

export default function ProductsPage() {
  const handleLogout = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    window.location.href = '/login'
  }
  return (
    <>
      <div className='flex justify-end h-20 bg-blue-600 text-white items-center px-10'>{email}
        <FirstComponentButton classname='ml-5 bg-black' text='Logout' onClick={handleLogout}/>
      </div>
      <div className='flex justify-center py-5'>
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image}></CardProduct.Header>
            <CardProduct.Body title={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </>
  )
}
