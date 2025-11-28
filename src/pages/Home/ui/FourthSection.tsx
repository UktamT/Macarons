import React from 'react'
import image from '../../../assets/Home/Rectangle 172 (1).png'
import cart from '../../../assets/Header/bag.svg'
import { Link } from 'react-router-dom'

import '../../../styles/Home/fourthSection.scss'

const FourthSection = () => {
  return (
    <section className='fourthSection'>
      <div className="container">
        <h4 className='fourthSection__title'>
          Популярные наборы
        </h4>

        <div className='fourthSection__kits'>
          <div className="fourthSection__kit">
            <img src={image} alt="" />
            <div className="fourthSection__kitBottom">
              <div className="fourthSection__bottomText">
                <h5 className='fourthSection__name'>Сердце</h5>
                <p className='fourthSection__subtitle'>24 штуки в коробке в виде сердца. <br />Ассорти из 6 вкусов </p>
                <div className="fourthSection__line"></div>

                <div className='fourthSection__information'>
                  <p className='fourthSection__price'>7500 руб</p>

                  <button className="fourthSection__cart">
                    <img src={cart} alt="" />
                    В корзину
                  </button>
                </div>
              </div>       
            </div>
          </div>
          <Link to={'/item'}>
          <div className="fourthSection__kit">
            <img src={image} alt="" />
            <div className="fourthSection__kitBottom">
              <div className="fourthSection__bottomText">
                <h5 className='fourthSection__name'>Сердце</h5>
                <p className='fourthSection__subtitle'>24 штуки в коробке в виде сердца. <br />Ассорти из 6 вкусов </p>
                <div className="fourthSection__line"></div>

                <div className='fourthSection__information'>
                  <p className='fourthSection__price'>7500 руб</p>

                  <button className="fourthSection__cart">
                    <img src={cart} alt="" />
                    В корзину
                  </button>
                </div>
              </div>       
            </div>
          </div>
          </Link>
          
          <div className="fourthSection__kit">
            <img src={image} alt="" />
            <div className="fourthSection__kitBottom">
              <div className="fourthSection__bottomText">
                <h5 className='fourthSection__name'>Сердце</h5>
                <p className='fourthSection__subtitle'>24 штуки в коробке в виде сердца. <br />Ассорти из 6 вкусов </p>
                <div className="fourthSection__line"></div>

                <div className='fourthSection__information'>
                  <p className='fourthSection__price'>7500 руб</p>

                  <button className="fourthSection__cart">
                    <img src={cart} alt="" />
                    В корзину
                  </button>
                </div>
              </div>       
            </div>
          </div>
          <div className="fourthSection__kit">
            <img src={image} alt="" />
            <div className="fourthSection__kitBottom">
              <div className="fourthSection__bottomText">
                <h5 className='fourthSection__name'>Сердце</h5>
                <p className='fourthSection__subtitle'>24 штуки в коробке в виде сердца. <br />Ассорти из 6 вкусов </p>
                <div className="fourthSection__line"></div>

                <div className='fourthSection__information'>
                  <p className='fourthSection__price'>7500 руб</p>

                  <button className="fourthSection__cart">
                    <img src={cart} alt="" />
                    В корзину
                  </button>
                </div>
              </div>       
            </div>
          </div>
          <div className="fourthSection__kit">
            <img src={image} alt="" />
            <div className="fourthSection__kitBottom">
              <div className="fourthSection__bottomText">
                <h5 className='fourthSection__name'>Сердце</h5>
                <p className='fourthSection__subtitle'>24 штуки в коробке в виде сердца. <br />Ассорти из 6 вкусов </p>
                <div className="fourthSection__line"></div>

                <div className='fourthSection__information'>
                  <p className='fourthSection__price'>7500 руб</p>

                  <button className="fourthSection__cart">
                    <img src={cart} alt="" />
                    В корзину
                  </button>
                </div>
              </div>       
            </div>
          </div>
          <div className="fourthSection__kit">
            <img src={image} alt="" />
            <div className="fourthSection__kitBottom">
              <div className="fourthSection__bottomText">
                <h5 className='fourthSection__name'>Сердце</h5>
                <p className='fourthSection__subtitle'>24 штуки в коробке в виде сердца. <br />Ассорти из 6 вкусов </p>
                <div className="fourthSection__line"></div>

                <div className='fourthSection__information'>
                  <p className='fourthSection__price'>7500 руб</p>

                  <button className="fourthSection__cart">
                    <img src={cart} alt="" />
                    В корзину
                  </button>
                </div>
              </div>       
            </div>
          </div>
        </div>

      <div className="fourthSection__auto">
        <button className="fourthSection__more">
          Все праздничные наборы
        </button>
      </div>
        
      </div>
    </section>
  )
}

export default FourthSection