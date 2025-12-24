import '../../../styles/Home/fourthSection.scss'
import Card from '../../../entities/card/Card';



const FourthSection = () => {
  return (
    <section className='fourthSection'>
      <div className="container">
        <h4 className='fourthSection__title'>
          Популярные наборы
        </h4>

      <Card limit={false}/>

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