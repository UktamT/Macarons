import React from 'react'
import mindal from '../../shared/assets/Header/Group 108.svg'
import '../../styles/Header/headerTop.scss'

const HeaderTop = () => {
  return (
    <div className="headerTop">
      <div className='container'>
        <div className='headerTop__flex'>
          <img src={mindal} alt="" />

          <p>МИНДАЛЬНАЯ МУКА И НАТУРАЛЬНЫЕ ИНГРЕДИЕНТЫ</p>
        </div>
        
      </div>
    </div>
  )
}

export default HeaderTop