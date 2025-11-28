import React from 'react'
import '../../../styles/Home/firstSection.scss'
import logo from '../../../assets/Home/Слой 0 1.svg'

const HomePage = () => {
  return (
    <section className='macaronShop'>
      <div className="container">
        <div className="macaronShop__content">
          <img src={logo} alt="" />
          <div className="macaronShop__text">
            <h1 className='macaronShop__title'>
              MACARONSHOP
            </h1>
            <p className='macaronShop__since'>since 2013</p>

            <p className='macaronShop__realLove'>Настоящая любовь</p>
            <p className='macaronShop__subtitle'>Пирожные макарон и другие десерты <br />из натуральных ингредиентов, приготовленные с любовью</p>
          </div>
        
        </div>
        
      </div>
    
    </section>
  )
}

export default HomePage