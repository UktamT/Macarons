import image from '../../../shared/assets/Create/6 макарон 1.png'
import image1 from '../../../shared/assets/Create/Rectangle 322.png'
import image2 from '../../../shared/assets/Create/Rectangle 322 (1).png'
import '../../../styles/Create/createSection.scss'
import { Link } from 'react-router-dom'
import { useKitStore } from '../../../shared/hooks/createKitStore'
import { useNavigate } from 'react-router-dom'



const CreateSection = () => {

  const {start} = useKitStore()
  const navigate = useNavigate()

  const onClickToSize = (size:number, price:number) => {
    start(size, price)
    navigate('/chooseMacaron')
  }


  return (
    <div className='createSection'>
      <div className="createSection__navigate">
        <Link to={'/'}>
          <p className='createSection__nav'>Главная {'>'}</p>
        </Link>        
        <p className='createSection__nav'>Собрать Набор {'>'}</p>
        <p className='createSection__nav color'>Выбрать количество</p>
      </div>

      <h2 className='createSection__choose'>Выбрать количество</h2>

      <div className="createSection__content">
        <div
          role="button"
          tabIndex={0} 
          onClick={() => onClickToSize(6, 350)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") onClickToSize(6, 350);
          }}
          className='createSection__cards'
        >       
          <img className='createSection__image' src={image} alt="" />
          <p className="createSection__title">Набор из 6 макарон</p>
          <p className="createSection__price">350 руб.</p>
        </div>
        <div
          role="button"
          tabIndex={0} 
          onClick={() => onClickToSize(9, 700)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") onClickToSize(9, 700);
          }}
          className='createSection__cards'
        >       
          <img className='createSection__image' src={image1} alt="" />
          <p className="createSection__title">Набор из 9 макарон</p>
          <p className="createSection__price">700 руб.</p>
        </div>
        <div
          role="button"
          tabIndex={0} 
          onClick={() => onClickToSize(12, 1400)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") onClickToSize(12, 1400);
          }}
          className='createSection__cards'
        >       
          <img className='createSection__image' src={image2} alt="" />
          <p className="createSection__title">Набор из 12 макарон</p>
          <p className="createSection__price">1400 руб.</p>
        </div>
      </div>

    </div>
  )
}

export default CreateSection