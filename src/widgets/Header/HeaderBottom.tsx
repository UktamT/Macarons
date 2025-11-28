import React from 'react'
import logo from '../../assets/Header/logo.svg'
import '../../styles/Header/headerBottom.scss'
import { Link } from 'react-router-dom'

const HeaderBottom = () => {
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
          <p className='headerBottom__title'>ВЕСЬ КАТАЛОГ</p>
        </div>
      </div>
    </div> 
  )
}

export default HeaderBottom