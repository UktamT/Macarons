
import '../../styles/Header/headerMiddle.scss'
import gis from '../../shared/assets/Header/Vector (10).svg'
import phone from '../../shared/assets/Header/phone.svg'
import bag from '../../shared/assets/Header/bag.svg'
import login from '../../shared/assets/Header/profile.png'
import signUp from '../../shared/assets/Header/add-user.png'
import { useCartStore } from '../../features/cart/model/cartStore'
import profile from '../../shared/assets/Header/profile.png'

import { Link, useNavigate } from 'react-router-dom'

const HeaderMiddle = () => {
  const Navigate = useNavigate()
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
            {
              localStorage.getItem('token') ? (
                <button className='headerMiddle__profile' onClick={() => {
                  Navigate('/profile')
                }}>
                  <img className='headerMiddle__profile' src={profile} alt="" />
                </button>
                
              ) : (
              <>
              <Link to={'/signin'}>
              <img className='headerMiddle__login' src={login} alt="" />
              </Link>
              <Link to={'/signup'}>
              <img className='headerMiddle__signUp' src={signUp} alt="" />
              </Link>              
              </>

              )
            }
          </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default HeaderMiddle