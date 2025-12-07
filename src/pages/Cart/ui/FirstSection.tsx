import '../../../styles/Cart/firstSection.scss'
import CartListItem from './CartListItem'
import CartTotal from './CartTotal'
import { useCartStore } from '../../../features/cart/model/cartStore'
import EmptyCart from './EmptyCart'
import { Link } from 'react-router-dom'

const FirstSection = () => {
  const cartItems = useCartStore((state) => state.state)

  return (
    <section className='firstSection'>
      <div className="container">
        <p className='firstSection__navigate'><Link className='firstSection__color' to='/'>Главная</Link> &gt; <span style={{color: 'rgba(78, 157, 211, 1)'}}>Корзина</span></p>

        <h2 className='firstSection__title'>Ваша Корзина</h2>

        <div className="firstSection__content">
          {
            cartItems.length > 0 ? 
            <div className='firstSection__flex'>
            <CartListItem />
            <CartTotal/>
            </div>
            
            : <EmptyCart/>
          }
          
        </div>
      </div>
    </section>
  )
}

export default FirstSection