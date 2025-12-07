import React from 'react'
import '../../../styles/Cart/emptyCart.scss'
import emptyCart from'../../../shared/assets/Cart/free-icon-empty-cart-16961608.png'

const EmptyCart = () => {
  return (
    <section className='empty'>
      <div className="container">
        <div className="empty__content">
          <img className='empty__image' src={emptyCart} alt="" />
          <h2 className='empty__title'>ПУСТА :(</h2>
        </div>
      </div>
    </section>
  )
}

export default EmptyCart