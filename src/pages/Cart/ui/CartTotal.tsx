import { useCartStore } from '../../../features/cart/model/cartStore';
import { useSessionStore } from '../../../shared/store/authStore'; // Импортируем стор сессии
import '../../../styles/Cart/cartTotal.scss';
import { Link } from 'react-router-dom';

const CartTotal = () => {
  const totalPrice = useCartStore((state) => state.totalPrice());
  const user = useSessionStore((state) => state.user);

  const isAuth = !!user;

  return (
    <div className='cartTotal'>
      <h6 className='cartTotal__title'>Итого</h6>
      <p className='cartTotal__totalItemPrice'>
        <span className='cartTotal__span'>Стоимость товаров</span> {totalPrice} руб
      </p>
      
      <div className="cartTotal__promo">
        <p>Промокод:</p>
        <input className='cartTotal__input' placeholder='Введите промокод' type="text" />
        <button className='cartTotal__button'>Применить</button>
      </div>
      {!isAuth && (
        <p style={{ color: '#e94e67', fontSize: '12px', marginBottom: '10px', textAlign: 'center' }}>
          Авторизуйтесь, чтобы оформить заказ
        </p>
      )}

      {isAuth ? (
        <Link to="/checkout">
          <button className="cartTotal__btn">
            Оформить заказ
          </button>
        </Link>
      ) : (
        <button 
          className="cartTotal__btn" 
          disabled 
          style={{ opacity: 0.5, cursor: 'not-allowed' }}
        >
          Оформить заказ
        </button>
      )}
    </div>
  );
};

export default CartTotal;