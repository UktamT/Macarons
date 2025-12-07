import '../../../styles/Home/fourthSection.scss'
import { usePopularProducts } from '../../../entities/product/hooks/usePopularProducts'
import CardSection from '../../../entities/card/Card';



const FourthSection = () => {
  const {loading, error} = usePopularProducts();

  
  if(loading) return <p>падажди баля, загрузка</p>
  if(error) return <p>Ошибка: {error.message}</p>
  
  

  return (
    <section className='fourthSection'>
      <div className="container">
        <h4 className='fourthSection__title'>
          Популярные наборы
        </h4>

      <CardSection/>

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