import '../../styles/Footer/footer.scss'
import image from '../../shared/assets/Footer/Frame.svg'
import secondImage from '../../shared/assets/Footer/Group 18.svg'
import thirdImage from '../../shared/assets/Footer/Vector (12).svg'
import instagramm from '../../shared/assets/Footer/Group 27.svg'
import facebook from '../../shared/assets/Footer/Group 28.svg'
import vk from '../../shared/assets/Footer/Group 29.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">

      <div className="footer__content">
        <div className="footer__left">

          <div className="footer__leftGarant">
            <div className="footer__leftBlock">
             <img className='footer__leftImage' src={image} alt="" />

             <p className='footer__leftBlockText'>Готовим вручную <br />и с любовью</p>
            </div>

            <div className="footer__leftBlock">
             <img className='footer__leftImage' src={secondImage} alt="" />

             <p className='footer__leftBlockText'>Доставим <br />в день заказа</p>
            </div>

            <div className="footer__leftBlock">
             <img className='footer__leftImage' src={thirdImage} alt="" />

             <p className='footer__leftBlockText'>100% <br />миндальная мука <br /> и натуральные <br />ингредиенты</p>
            </div>

          </div>

          <p className='footer__leftBottom'>© 2021 Макароншоп <br />ООО "Квантум", Санкт-Петербург,  улица Маршала Тухачевского, <br /> дом 22</p>
        </div>

        <div className="footer__middle">
          <div className="footer__middleBlock">
            <h5 className="footer__middleBlockText">
              Информация
            </h5>
            <p className='footer__middleBlockLink'>О компании</p>
            <p className='footer__middleBlockLink'>Гарантии вкуса и <br /> и свежести</p>
            <p className='footer__middleBlockLink'>Доставка и оплата</p>
            <p className='footer__middleBlockLink'>Контакты</p>
          </div>

          <div className="footer__middleBlock">
            <h5 className="footer__middleBlockText">
              Каталог
            </h5>
            <p className='footer__middleBlockLink'>Каталог десертов</p>
            <p className='footer__middleBlockLink'>Готовые наборы</p>
            <p className='footer__middleBlockLink'>Собрать свой набор</p>
            <p className='footer__middleBlockLink'>Акции</p>
          </div>

          <div className="footer__middleBlock">
            <h5 className="footer__middleBlockText">
              ДЛЯ БИЗНЕСА
            </h5>
            <p className='footer__middleBlockLink'>Корпоративные <br /> подарки</p>
            <p className='footer__middleBlockLink'>Для юридических лиц</p>
            <p className='footer__middleBlockLink'>Оптовикам</p>
          </div>
        </div>

        <div className="footer__right">
          <h5 className='footer__rightPhone'>+7 (812) 309 82 88</h5>
          <p className='footer__rightTime'>с 9:00 до 21:00</p>


          <div className="footer__rightSocials">
            <img src={instagramm} alt="" />
            <img src={facebook} alt="" />
            <img src={vk} alt="" />
          </div>
        </div>


      </div>
        
      </div>
      
    </footer>
  )
}

export default Footer