import React from 'react'
import Card from '../../../shared/ui/Card'
import '../../../styles/Home/SecondSection.scss'
import puncake from '../../../assets/Home/Group 122.svg'
import burger from '../../../assets/Home/Group 125.svg'
import light from '../../../assets/Home/Group 124.svg'
import cake from '../../../assets/Home/Group 123.svg'

const SecondSection = () => {
  return (
    <section className='secondSection'>
      <div className="container">
        <div className='secondSection__content'>
          <Card 
            color={'cardFirst'}
            image={burger}
            title={'Готовые наборы'}
            subtitle={'Готовые наборы со скидкой. Вы можете подобрать набор на подходящий случай.'}
          />
          <Card
            color={'cardSecond'}
            image={puncake}
            title={'Собрать свой набор'}
            subtitle={'Выбрать количество макарун, и выбрать вкусы'}
          />
          <Card 
            color={'cardThird'}
            image={light}
            title={'Набор с индивидуальной печатью'}
            subtitle={'Собрать набор макарон с уникальным дизайном. '}
          />
          <Card 
            color={'cardFourth'}
            image={cake}
            title={'Свадебные предложения'}
            subtitle={'Нежные пирожные макаронс с разными вкусами для украшения вашего свадебного торжества'}
          />
        </div>
      </div>
      
    </section>
  )
}

export default SecondSection