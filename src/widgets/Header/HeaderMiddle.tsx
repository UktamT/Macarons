import React from 'react'
import '../../styles/Header/headerMiddle.scss'
import gis from '../../shared/assets/Header/Vector (10).svg'
import phone from '../../shared/assets/Header/phone.svg'
import bag from '../../shared/assets/Header/bag.svg'
import tg from '../../shared/assets/Header/tg.svg'
import vk from '../../shared/assets/Header/vk.svg'
import ok from '../../shared/assets/Header/ok.svg'
import { useCartStore } from '../../features/cart/model/cartStore'

import { Link } from 'react-router-dom'

const HeaderMiddle = () => {
  const cartItems = useCartStore((state) => state.state)

  return (
    <div className='headerMiddle'>
      <div className="container">
        <div className="headerMiddle__flex">
          <ul className="headerMiddle__left">
          <li className='headerMiddle__text'>
            Гарантия свежести
          </li>
          <li className='headerMiddle__text'>
            Доставка и оплата
          </li>
          <li className='headerMiddle__text'>
            Оптовые поставки
          </li>
          <li className='headerMiddle__text'>
            Контакты
          </li>
        </ul>
        <div className='headerMiddle__right'>
          <div className='headerMiddle__block'>
            <img src={gis} alt="" />
            <p className='headerMiddle__blockTitle'>Санкт-Петербург</p>
          </div>

          <div className='headerMiddle__block'>
            <img src={phone} alt="" />
            <p className='headerMiddle__blockTitle'>8 812 309-82-88</p>
          </div>
            <Link to={'/cart'}>
              <div className='headerMiddle__block'>
                <img src={bag} alt="" />
            
                <p className='headerMiddle__countSecond'>{cartItems.length}</p>
                <p className='headerMiddle__blockTitle'>В корзине ({cartItems.length} товаров)</p>
              </div>
            </Link>
            
          

          <div className='headerMiddle__socials'>
            <img src={tg} alt="" />
            <img src={vk} alt="" />
            <img src={ok} alt="" />
          </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default HeaderMiddle