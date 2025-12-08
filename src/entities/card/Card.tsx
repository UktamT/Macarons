import { useCartStore } from '../../features/cart/model/cartStore'
import { usePopularProducts } from '../../entities/product/hooks/usePopularProducts'
import checked from '../../shared/assets/Home/free-icon-check-14090371.png'
import { Link } from 'react-router-dom'
import cart from '../../shared/assets/Header/bag.svg'
import image1 from '../../shared/assets/Home/Rectangle 172 (1).png'
import image2 from '../../shared/assets/Home/Rectangle 174.png'
import image3 from '../../shared/assets/Home/Rectangle 176.png'
import '../../styles/Home/fourthSection.scss'

interface propsType {
  limit: boolean;
}

const Card = ({limit}: propsType) => {
  const {products} = usePopularProducts(limit);
  const addToCart = useCartStore((state) => state.addToCart);
  const cartItems = useCartStore((state) => state.state);
  const images: Record<string, string> = {image1, image2, image3};

  return (
        <div className='fourthSection__kits'>
          {products.map((p) => (
          

          <Link to={`/itempage/${p.id}`} key={p.id} className="fourthSection__kit">
            <img src={images[p.image] || image1} alt="" />
            <div className="fourthSection__kitBottom">
              <div className="fourthSection__bottomText">
                <h5 className='fourthSection__name'>{p.title}</h5>
                <p className='fourthSection__subtitle'>{p.subtitle} </p>
                <div className="fourthSection__line"></div>

                <div className='fourthSection__information'>
                  <p className='fourthSection__price'>{p.price} руб</p>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addToCart(p);
                    }}
                    className="fourthSection__cart">
                    <img className='fourthSection__cartImage' src={cartItems.find((i) => p.id === i.id) ? checked : cart} alt="" />

                    {(() => {
                      const item = cartItems.find((i) => i.id === p.id);

                      if (!item) return "Добавить в корзину";
                      if (item.quantity > 1) return `Увеличено на (${item.quantity -1})`;
                      return "Добавлено";
                    })()}
                  </button>
                </div>
              </div>       
            </div>
          </Link>
          ))}
        </div>
  )
}

export default Card