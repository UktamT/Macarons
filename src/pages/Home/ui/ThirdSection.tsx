import image from '../../../shared/assets/Home/Rectangle 172.png'
import '../../../styles/Home/thirdSection.scss'

const ThirdSection = () => {
  return (
    <section className='thirdSection'>
      <div className="container">
        <h3 className='thirdSection__title'>Акции</h3>

        <div className='thirdSection__cards'>
          <div className="thirdSection__card">
            <img src={image} alt="" />
            <p className='thirdSection__subtitle'>По СПб в районе КАД –  от 3000₽ <br />По МСК – от 5000₽</p>
          </div>
          <div className="thirdSection__card">
            <img src={image} alt="" />
            <p className='thirdSection__subtitle'>По СПб в районе КАД –  от 3000₽ <br />По МСК – от 5000₽</p>
          </div>
          <div className="thirdSection__card">
            <img src={image} alt="" />
            <p className='thirdSection__subtitle'>По СПб в районе КАД –  от 3000₽ <br />По МСК – от 5000₽</p>
          </div>
          <div className="thirdSection__card">
            <img src={image} alt="" />
            <p className='thirdSection__subtitle'>По СПб в районе КАД –  от 3000₽ <br />По МСК – от 5000₽</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThirdSection