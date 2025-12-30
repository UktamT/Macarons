import '../../../styles/Home/fourthSection.scss'
import Card from '../../../entities/card/Card';
import { Link } from 'react-router-dom';



const FourthSection = () => {
  return (
    <section className='fourthSection'>
      <div className="container">
        <h4 className='fourthSection__title'>
          Популярные наборы
        </h4>

      <Card limit={false}/>

      <div className="fourthSection__auto">
        <Link to={'/readyKits'}>
          <button className="fourthSection__more">
            Все праздничные наборы
          </button>
        </Link>
        
      </div>
        
      </div>
    </section>
  )
}

export default FourthSection