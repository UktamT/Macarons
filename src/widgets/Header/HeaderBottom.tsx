import React, { useState } from 'react'
import logo from '../../shared/assets/Header/logo.svg'
import '../../styles/Header/headerBottom.scss'
import { Link } from 'react-router-dom'
import drop from '../../shared/assets/Header/Vector (15).svg'

const HeaderBottom = () => {
  const [modal, setModal] = useState<boolean>(false)

  const changeModal = () => {
    setModal(!modal)
  }

  return (
    <div className='headerBottom'>
      <div className="container">
        <div className="headerBottom__flex">
          <p style={{display: 'flex', alignItems: 'center', gap: '3px'}} className='headerBottom__title'>СЛАДКИЕ ДНИ <span className='headerBottom__span'>%</span></p>
          <p className='headerBottom__title'>подарочные наборы</p>
          <p className='headerBottom__title'>Собрать набор</p>
          <Link to={"/"}><img src={logo} alt="" /></Link>
          <p className='headerBottom__title'>Создать дизайн</p>
          <p className='headerBottom__title'>КОМПАНИЯМ</p>
          <button onClick={() => changeModal()} className='headerBottom__title'>
            ВЕСЬ КАТАЛОГ <img src={drop} alt="" />
          </button>


          {
            modal &&
            <div className="headerBottom__modal">
              <Link onClick={() => setModal(false)} to={'/catalog'}>
              <p style={{color: 'black'}} className='headerBottom__category'>Каталог Десертов</p>
              </Link>
              

              
              <p className='headerBottom__category'>Готовые наборы</p>
              <p className='headerBottom__category'>Трубочки со сгущенкой</p>
              <p className='headerBottom__category'>Эклеры</p>
              <p className='headerBottom__category'>Профитроли</p>
            </div>
          }
          
        </div>
      </div>
    </div> 
  )
}

export default HeaderBottom