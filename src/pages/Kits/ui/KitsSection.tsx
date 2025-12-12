import Card from '../../../entities/card/Card'
import  '../../../styles/Kits/KitsSection.scss'
import { Link } from 'react-router-dom'

const KitsSection = () => {
  return (
    <div className='kitsSection'>
      <div className="kitsSection__navigate">
        <Link to={'/'}>
        <p className='kitsSection__nav'>Главная {'>'}</p>
        </Link>
        <Link to={'/catalog'}>
        <p className='kitsSection__nav'>Каталог десертов {'>'}</p>
        </Link>
        
        <p className='kitsSection__navLink'>Готовые наборы</p>
      </div>

      <h2 className='kitsSection__title'>Готовые наборы</h2>
      <Card limit={false}/>
    </div>
  )
}

export default KitsSection