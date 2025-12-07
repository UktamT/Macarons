import '../../styles/Home/SecondSection.scss'
import right from '../assets/Home/Vector (11).svg'

interface propsType {
  title: string;
  subtitle: string;
  color: string;
  image: string;
}

const Card = ({title, subtitle, color, image}: propsType) => {
  return (
    <div className={color}>
      <div>
        <img className='cardBase__image' src={image} alt="" />
          <h2 className='cardBase__title'>
            {title}
            <span style={{padding: '0 0 0 10px'}}>
              <img src={right} alt="" />
            </span>
        </h2>
          <p className='cardBase__subtitle'>
            {subtitle}
          </p>
      </div>
</div>

  )
}

export default Card