import React from 'react'
import FirstComponentButton from '../components/Elements/Buttons/FirstComponentButton'
import CardProduct from '../components/Fragments/CardProduct'

export default function ProductsPage() {
  return (
    <div className='flex justify-center py-5'>
      <CardProduct>
        <CardProduct.Header image={'/images/shoes-1.jpg'}></CardProduct.Header>
        <CardProduct.Body title={'Sepatu Baru'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iste amet illum consequuntur est suscipit quam laudantium soluta, maxime quas, id sed laborum saepe. Debitis ex reprehenderit totam fuga dolor.
        </CardProduct.Body>
        <CardProduct.Footer price={'Rp 1.000.000'} />
      </CardProduct>
    </div>
  )
}
