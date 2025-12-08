import { useProductById } from '../../../entities/product/hooks/useProductById'
import image1 from '../../../shared/assets/Home/Rectangle 172 (1).png'
import image2 from '../../../shared/assets/Home/Rectangle 174.png'
import image3 from '../../../shared/assets/Home/Rectangle 176.png'
import { Link, useParams } from 'react-router-dom'
import '../../../styles/ItemPages/itemPageSection.scss'
import cart from '../../../shared/assets/ItemPage/Group 3.svg'
import { useCartStore } from '../../../features/cart/model/cartStore'

export const ItemPageSection = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const { id } = useParams<{id: string}>();
  const productId = Number(id);
  const cartItems = useCartStore((state) => state.state)
  const { products, loading, error } = useProductById(productId);
  const images: Record<string, string> = {image1, image2, image3};
    
  if (!id) return <div>Товар не найден</div>;
  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;
    
  return (
    <div className='itemPageSection'>
      <div className="itemPageSection__navigate">
        <Link to={'/'} className='itemPageSection__nav'>Главная  {">"}</Link>
        <Link to={'/readyKits'} className='itemPageSection__nav'>Готовые Наборы  {">"}</Link> 
        <p className='itemPageSection__navHover'>{products?.title}</p>
      </div>

      <div className="itemPageSection__content">
      <img className='itemPageSection__image' src={images[products.image]} alt="" />
      <div className="itemPageSection__right">
      <p className='itemPageSection__title'>{products?.title}</p>
      <p className='itemPageSection__subtitle'>{products?.subtitle}</p>
      {
        products?.tastes && (
          <ul className='itemPageSection__ul'>
              <li className='itemPageSection__taste'>Вкусы:</li>
            {
              Object.entries(products.tastes).map(([taste, item]) => (
                <div className='itemPageSection__tastes' key={taste}>
                  <li className="itemPageSection__li">
                    {taste}
                  </li>

                  <div className="itemPageSection__line">

                  </div>

                  <li className="itemPageSection__count">
                    {item}
                  </li>
                </div>
              ))
            }
          </ul>
        )
      }

      <div className='itemPageSection__bottom'>
        <p className='itemPageSection__price'>{products?.price} руб</p>

        <button onClick={() => addToCart(products)} className='itemPageSection__btn'>
          <img src={cart} alt="" />
          {(() => {
            const item = cartItems.find((i) => i.id);

            if (!item) return "Добавить в корзину";
            if (item.quantity > 1) return `Увеличено на (${item.quantity -1})`;
            return "Добавлено";
          })()}
        </button>

      </div>
      </div>
      </div>
      
    </div>
  )
}
