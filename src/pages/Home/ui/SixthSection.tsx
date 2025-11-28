import React from 'react'
import image from '../../../assets/Home/Rectangle 214.png'
import '../../../styles/Home/sixthSection.scss'

const SixthSection = () => {
  return (
    <section className='sixthSection'>
      <div className="container">
        <h6 className='sixthSection__title'>
          Мы обо всём позаботились
        </h6>

        <div className="sixthSection__cards">
          <div className="sixthSection__card">
            <img src={image} alt="" />

            <h6 className='sixthSection__name'>
              Лучшие ингрединты
            </h6>

            <p className="sixthSection__subtitle">
              Что-то про суперкачество, лучших <br />поваров, свежесть и т.д.
            </p>
          </div>
          <div className="sixthSection__card">
            <img src={image} alt="" />

            <h6 className='sixthSection__name'>
              Лучшие ингрединты
            </h6>

            <p className="sixthSection__subtitle">
              Что-то про суперкачество, лучших <br />поваров, свежесть и т.д.
            </p>
          </div>
          <div className="sixthSection__card">
            <img src={image} alt="" />

            <h6 className='sixthSection__name'>
              Лучшие ингрединты
            </h6>

            <p className="sixthSection__subtitle">
              Что-то про суперкачество, лучших <br />поваров, свежесть и т.д.
            </p>
          </div>
          <div className="sixthSection__card">
            <img src={image} alt="" />

            <h6 className='sixthSection__name'>
              Лучшие ингрединты
            </h6>

            <p className="sixthSection__subtitle">
              Что-то про суперкачество, лучших <br />поваров, свежесть и т.д.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SixthSection