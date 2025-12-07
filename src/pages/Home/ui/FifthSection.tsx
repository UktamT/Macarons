import React from 'react'
import '../../../styles/Home/fifthSection.scss'

import image from '../../../shared/assets/Home/Rectangle 282.png'

const FifthSection = () => {
  return (
    <section className='fifthSection'>
      <div className="container">
        <h5 className='fifthSection__title'>Новости</h5>


        <div className="fifthSection__news">
          <div className="fifthSection__card">
            <img src={image} alt="" />

            <div className="fifthSection__text">
              <p className='fifthSection__date'>25.02.2023</p>

              <h6 className='fifthSection__name'>Скоро главный праздник весны!</h6>

              <p className='fifthSection__subtitle'>Девушки любят, когда вкусно, красиво и <br /> натурально. Смотрите больше наборов с <br />десертами ручной работы</p>
            </div>
            
          </div>

          <div className="fifthSection__card">
            <img src={image} alt="" />

            <div className="fifthSection__text">
              <p className='fifthSection__date'>25.02.2023</p>

              <h6 className='fifthSection__name'>Скоро главный праздник весны!</h6>

              <p className='fifthSection__subtitle'>Девушки любят, когда вкусно, красиво и <br /> натурально. Смотрите больше наборов с <br />десертами ручной работы</p>
            </div>
            
          </div>

          <div className="fifthSection__card">
            <img src={image} alt="" />

            <div className="fifthSection__text">
              <p className='fifthSection__date'>25.02.2023</p>

              <h6 className='fifthSection__name'>Скоро главный праздник весны!</h6>

              <p className='fifthSection__subtitle'>Девушки любят, когда вкусно, красиво и <br /> натурально. Смотрите больше наборов с <br />десертами ручной работы</p>
            </div>
            
          </div>
        </div>
        <div style={{margin: '35px 0 85px 0'}}>
          <button className='fifthSection__btn'>Все новости</button>
        </div>
      </div>
    </section>
  )
}

export default FifthSection