import '../../../styles/Home/fifthSection.scss'

import image1 from '../../../shared/assets/Home/Rectangle 282.png'
import image2 from '../../../shared/assets/Home/Rectangle 282 (1).png'
import image3 from '../../../shared/assets/Home/Rectangle 282 (2).png'
import { useNews } from '../../../entities/news/hooks/useNews'
import { Link } from 'react-router-dom'



const FifthSection = () => {
  const { news, loading } = useNews()
  const images: Record<string, string> = {image1, image2, image3};

  if(loading) return <div>Loading...</div>
  return (
    <section className='fifthSection'>
      <div className="container">
        <h5 className='fifthSection__title'>Новости</h5>


        <div className="fifthSection__news">
          {news.map((i, index) => (
            <div key={index} className="fifthSection__card">
            <Link to={`/newspage/${i.id}`} >
          
            <img src={images[i.image]} alt="" />

            <div className="fifthSection__text">
              <p className='fifthSection__date'>{i.date}</p>

              <h6 className='fifthSection__name'>{i.title}</h6>

              <p className='fifthSection__subtitle'>{i.subtitle}</p>
            </div>
            
                       
            </Link>
          </div> 
          ))}

        </div>
        <div style={{margin: '35px 0 85px 0'}}>
          <button className='fifthSection__btn'>Все новости</button>
        </div>
      </div>
    </section>
  )
}

export default FifthSection