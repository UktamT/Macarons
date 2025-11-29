import cart from '../../../assets/Header/bag.svg'
import image1 from '../../../assets/Home/Rectangle 172 (1).png'
import image2 from '../../../assets/Home/Rectangle 174.png'
import '../../../styles/Home/fourthSection.scss'
import { usePopularProducts } from '../../../entities/product/hooks/usePopularProducts'
import { useCartStore } from '../../../features/cart/model/cartStore'


const FourthSection = () => {
  const {products, loading, error} = usePopularProducts();
  const addToCart = useCartStore((state) => state.addToCart);
  const images = {image1, image2};
  
  if(loading) return <p>падажди баля, загрузка</p>
  if(error) return <p>Ошибка: {error.message}</p>
  
  return (
    <section className='fourthSection'>
      <div className="container">
        <h4 className='fourthSection__title'>
          Популярные наборы
        </h4>

        <div className='fourthSection__kits'>
          {products.map((p) => (
            <div key={p.id} className="fourthSection__kit">
            <img src={images[p.image]} alt="" />
            <div className="fourthSection__kitBottom">
              <div className="fourthSection__bottomText">
                <h5 className='fourthSection__name'>{p.title}</h5>
                <p className='fourthSection__subtitle'>{p.subtitle} </p>
                <div className="fourthSection__line"></div>

                <div className='fourthSection__information'>
                  <p className='fourthSection__price'>{p.price} руб</p>

                  <button onClick={() => addToCart(p)} className="fourthSection__cart">
                    <img src={cart} alt="" />
                    В корзину
                  </button>
                </div>
              </div>       
            </div>
          </div>
          ))}
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