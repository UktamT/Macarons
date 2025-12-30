import '../../../styles/Home/firstSection.scss'
import logo from '../../../shared/assets/Home/Слой 0 1.svg'
import back1 from '../../../shared/assets/Home/Ellipse 20.png'
import back2 from '../../../shared/assets/Home/Ellipse 5 (1).png'
import back3 from '../../../shared/assets/Home/Ellipse 3 (1).png'
import back4 from '../../../shared/assets/Home/Ellipse 21.png'

const FirstSection = () => {

  return (
    <section className='macaronShop'>
      <div className="container">
        <div className="macaronShop__content">
          <img src={logo} alt="" />
          <img className='macaronShop__backFirst' src={back1} alt="" />
          <img className='macaronShop__backSecond' src={back2} alt="" />
          <img className='macaronShop__backThird' src={back3} alt="" />
          <img className='macaronShop__backFourth' src={back4} alt="" />
          <div className="macaronShop__text">
            <h1 className='macaronShop__title'>
              MACARONSHOP
            </h1>
            <p className='macaronShop__since'>─── since 2013 ───</p>

            <p className='macaronShop__realLove'>Настоящая любовь</p>
            <p className='macaronShop__subtitle'>Пирожные макарон и другие десерты <br />из натуральных ингредиентов, приготовленные с любовью</p>
          </div>
        
        </div>
        
      </div>
    
    </section>
  )
}

export default FirstSection