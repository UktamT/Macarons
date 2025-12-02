import '../../../styles/Cart/cartListItem.scss'
import { useCartStore } from '../../../features/cart/model/cartStore'
import image1 from '../../../assets/Home/Rectangle 172 (1).png'
import image2 from '../../../assets/Home/Rectangle 174.png'
import close from '../../../assets/Cart/Vector (14).svg'


const CartListItem = () => {
  const products = useCartStore((state) => state.state);
  const dec = useCartStore((state) => state.decreaseQuantity)
  const inc = useCartStore((state) => state.increaseQuantity)
  const del = useCartStore((state) => state.removeFromCart)
  const images: Record<string, string> = {image1, image2};

  return (
    <div className='cartListItem'>
      {products.map((p) => (
        <div key={p.id} className='cartListItem__item'>
          <img className='cartListItem__image' src={images[p.image]} alt="" />
          <div className='cartListItem__itemBottom'>
            <h5 className='cartListItem__itemTitle'>{p.title}</h5>
            <div className="cartListItem__count">
            <button onClick={() => dec(p.id)} className="cartListItem__operator">
              -
            </button>
            <p className='cartListItem__quantity'>{p.quantity}</p>
            <button onClick={() => inc(p.id)} className="cartListItem__operator">
              +
            </button>
            </div>
            
            <p className='cartListItem__price'><span className='cartListItem__span'>Цена: </span>{ p.price * p.quantity} руб.</p>

            <button onClick={() => del(p.id)} className="cartListItem__delete"><img className='cartListItem__close' src={close} alt="" /></button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CartListItem