import React from 'react'
import '../../../styles/Cart/firstSection.scss'

const FirstSection = () => {
  return (
    <section className='firstSection'>
      <div className="container">
        <p className='firstSection__navigate'>Главная &gt; <span style={{color: 'rgba(78, 157, 211, 1)'}}>Корзина</span></p>

        <h2 className='firstSection__title'>Ваша Корзина</h2>

        <p className='firstSection__countPrice'>3 товара / 1030 руб.</p>


        <div className="firstSection__content">
          
        </div>
      </div>
    </section>
  )
}

export default FirstSection