import Card from '../../../shared/ui/Card'
import '../../../styles/Home/SecondSection.scss'
import puncake from '../../../shared/assets/Home/Group 122.svg'
import burger from '../../../shared/assets/Home/Group 125.svg'
import light from '../../../shared/assets/Home/Group 124.svg'
import cake from '../../../shared/assets/Home/Group 123.svg'
import { Link } from 'react-router-dom'

const SecondSection = () => {
  return (
    <section className='secondSection'>
      <div className="container">
        <div className='secondSection__content'>
          <Link to={'/readyKits'}>
            <Card 
              color={'cardFirst'}
              image={burger}
              title={'Готовые наборы'}
              subtitle={'Готовые наборы со скидкой. Вы можете подобрать набор на подходящий случай.'}
            />
          </Link>
          
  
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