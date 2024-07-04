import React, { useState, useEffect, useRef, useContext } from 'react'
import { useSelector } from 'react-redux'
import { DarkMode } from '../../context/DarkMode'
import { useTotalPrice, useTotalPriceDispatch } from '../../context/TotalPriceContext'

export default function TableCart({ products }) {
  const cart = useSelector((state) => state.cart.data)
  // const [totalPrice, setTotalPrice] = useState(0)
  const { isDarkMode } = useContext(DarkMode)
  const dispatch = useTotalPriceDispatch()
  const { total } = useTotalPrice()

  useEffect(() => {
    if(cart.length > 0 && products.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id)
        return acc + product.price * item.qty
      }, 0)
      dispatch({
        type: "UPDATE",
        payload: {
          total: sum
        }
      })
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart, products])

  const totalPriceRef = useRef(null)

  useEffect(() => {
    if(cart.length > 0) {
      totalPriceRef.current.style.display = "table-row"
    } else {
      totalPriceRef.current.style.display = "none"
    }
  }, [cart])

  return (
    <table className={`text-left table-auto border-separate border-spacing-x-5 ${isDarkMode && "text-white"}`}>
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
          return (
            <tr key={item.id}>
              <td>{product.title.substring(0, 10)} ...</td>
              <td>Rp {product.price.toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</td>
              <td>{item.qty}</td>
              <td>$ {(item.qty * product.price).toLocaleString('id-ID', { styles: 'currency', currency: 'USD' })}</td>
            </tr>
          )

        })}
        <tr className='font-bold' ref={totalPriceRef}>
          <td colSpan={3}>Total Price</td>
          <td>$ {total.toLocaleString('id-ID', { styles: 'currency', currency: 'USD' })}</td>
        </tr>
      </tbody>
    </table>
  )
}
