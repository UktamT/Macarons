import React from 'react'
import '../../../styles/Catalog/catalogFirstSection.scss'
import imageFirst from '../../../shared/assets/Catalog/IMG_3027 копия 1.png'
import imageSecond from '../../../shared/assets/Catalog/IMG_2745 1.png'
import imageThird from '../../../shared/assets/Catalog/IMG_3098 копия 1.png'
import imageFifth from '../../../shared/assets/Catalog/профитроли 1.png'
import { Link } from 'react-router-dom'

const CatalogFirstSection = () => {
  return (
    <div className='catalogFirstSection'>
      <div className="container">
        <div className='catalogFirstSection__navigate'>
          <Link to={'/'}>
           <p className='catalogFirstSection__main'>Главная{'>'}</p>
          </Link>
          <p className='catalogFirstSection__desert'>Каталог десертов</p>
        </div>
        <h2 className='catalogFirstSection__catalog'>Каталог десертов</h2>

        <div className="catalogFirstSection__content">
          <div className="catalogFirstSection__card">
            <img className='catalogFirstSection__firstImage' src={imageFirst} alt="" />
            <div className="catalogFirstSection__cardText">
            <h3 className='catalogFirstSection__title'>
              Пирожные макарон
            </h3>
            <p className="catalogFirstSection__subtitle">
              Самые классные, самые лучшие, свежие, воздушные, хрустящие макарушки. лучшее, что мы умеем делать.
            </p>

            <div className="catalogFirstSection__btns">
              <Link to={'/readyKits'}>
                <button className="catalogFirstSection__btn">
                  Готовые наборы
                </button>
              
              </Link>
              
              <button className="catalogFirstSection__btn">
                Собрать свой набор
              </button>
            </div>

            </div>

          </div>

          <div className="catalogFirstSection__cardBlock">
            <img className='catalogFirstSection__cardBlockImage' src={imageSecond} alt="" />
            <p className='catalogFirstSection__cardBlockTitle'>Трубочки со сгущенкой</p>
          </div>
          <div style={{background: "rgba(254, 176, 225, 1)"}} className="catalogFirstSection__cardBlock">
            <img className='catalogFirstSection__cardBlockImage' src={imageThird} alt="" />
            <p className='catalogFirstSection__cardBlockTitle'>Трубочки со сгущенкой</p>
          </div>
          <div style={{background: 'rgba(254, 206, 149, 1)'}} className="catalogFirstSection__cardBlock">
            <img className='catalogFirstSection__cardBlockImage' src={imageFifth} alt="" />
            <p className='catalogFirstSection__cardBlockTitle'>Трубочки со сгущенкой</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogFirstSection