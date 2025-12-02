import React from 'react'
import { useCartStore } from '../../../features/cart/model/cartStore'
import '../../../styles/Cart/cartTotal.scss'

const cartTotal = () => {
  const totalPrice = useCartStore((state) => state.totalPrice());

  return (
    <div className='cartTotal'>
      <h6 className='cartTotal__title'>Итого</h6>
      <p className='cartTotal__totalItemPrice'><span className='cartTotal__span'>Стоимость товаров</span> {totalPrice} руб</p>
    </div>
  )
}

export default cartTotal