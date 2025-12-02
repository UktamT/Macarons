import '../../../styles/Cart/firstSection.scss'
import CartListItem from './cartListItem'
import { useCartStore } from '../../../features/cart/model/cartStore'
import EmptyCart from './EmptyCart'

const FirstSection = () => {
  const cartItems = useCartStore((state) => state.state)

  return (
    <section className='firstSection'>
      <div className="container">
        <p className='firstSection__navigate'>Главная &gt; <span style={{color: 'rgba(78, 157, 211, 1)'}}>Корзина</span></p>

        <h2 className='firstSection__title'>Ваша Корзина</h2>

        <div className="firstSection__content">
          {
            cartItems.length > 0 ? 
            <CartListItem />
            : <EmptyCart/>
          }
          
        </div>
      </div>
    </section>
  )
}

export default FirstSection