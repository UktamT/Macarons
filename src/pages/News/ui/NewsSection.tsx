import '../../../styles/News/newsSection.scss'
import { useNewsById } from '../../../entities/news/hooks/useNewsById'
import { useParams } from 'react-router-dom'
import image1 from '../../../shared/assets/Home/Rectangle 282.png'
import image2 from '../../../shared/assets/Home/Rectangle 282 (1).png'
import image3 from '../../../shared/assets/Home/Rectangle 282 (2).png'

const NewsSection = () => {
  const { id } = useParams<{ id: string }>()
  const newsId = Number(id)
  const { news, loading, error } = useNewsById(newsId)
  const images: Record<string, string> = {image1, image2, image3};
  if(loading) return <div>Loading...</div>
  if(error) return <div>Error: {error.message}</div>
  return (
    <section className='newsSection'>
      <div className="container">
        <div className="newsSection__content">
          <p className='newsSection__title'>{news?.title}</p>
          <p className='newsSection__subtitle'>{news?.subtitle}</p>
          <img src={images[news.image]} alt="" />
        </div>
      </div>
    </section>
  )
}

export default NewsSection
