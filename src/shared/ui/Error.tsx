import { useNavigate } from 'react-router-dom'
import '../../styles/Error/error.scss'
import img1 from '../assets/Home/Group 313.png'

const Error = () => {
  const navigate = useNavigate()
  
  return (
    <div className='error'>
      <div className="container">
        <div className="error__content">
          <h2 className='error__title'>
            Извините, страница не найдена
          </h2>
          <p className='error__errorStatus'>404</p>
          <img className='error__img' src={img1} alt="" />
          <button onClick={() => navigate('/')} className='error__btn'>Назад</button>
        </div>
      </div>
    </div>
  )
}

export default Error