import { useCartStore } from '../../../features/cart/model/cartStore'
import '../../../styles/Cart/cartTotal.scss'
import { Link } from 'react-router-dom';

const cartTotal = () => {
  const totalPrice = useCartStore((state) => state.totalPrice());
  

  return (
    <div className='cartTotal'>
      <h6 className='cartTotal__title'>Итого</h6>
      <p className='cartTotal__totalItemPrice'><span className='cartTotal__span'>Стоимость товаров</span> {totalPrice} руб</p>
      
      <div className="cartTotal__promo">
        <p>Промокод:</p>

        <input className='cartTotal__input' placeholder='Введите промокод' type="text" />
        <button className='cartTotal__button'>Применить</button>
      </div>

      <Link to="/checkout">
      <button className="cartTotal__btn">
        Оформить заказ
      </button>      
      </Link>

      
    </div>
  )
}

export default cartTotal