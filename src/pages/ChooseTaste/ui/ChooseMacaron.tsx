import { useMacaron } from '../../../entities/macarons/hooks/useMacaron'
import '../../../styles/ChooseTaste/ChooseMacaron.scss'
import image1 from '../../../shared/assets/Choose/Rectangle 239.png'
import image2 from '../../../shared/assets/Choose/Rectangle 241.png'
import image3 from '../../../shared/assets/Choose/Rectangle 243.png'
import { useKitStore } from '../../../shared/hooks/createKitStore'
import { useCartStore } from '../../../features/cart/model/cartStore'
import { useNavigate } from 'react-router-dom'

const ChooseMacaron = () => {
  const navigate = useNavigate()
  const addKit = useCartStore((state) => state.addKit);
  const resetKit = useKitStore((state) => state.reset);
  const draft = useKitStore((state) => state.draft)
  const add = useKitStore((state) => state.add)
  const remove = useKitStore((state) => state.remove)
  const images: Record<string, string> = {image1, image2, image3}
  const { macaron, loading } = useMacaron()
  const totalSelected = draft?.items.reduce((acc, item) => acc + item.quantity, 0);


  if (!draft) return <p>Выберите размер набора</p>
  if (loading) return <div>Загрузка...</div>


  return (
    <div className='chooseMacaron'>
      <div className="container">
        <div className="chooseMacaron__content">
          {macaron.map((macaron) => {
            const selected = draft.items.find((i) => i.id === macaron.id);
            const qty = selected ? selected.quantity : 0;
            
            return (
              <div key={macaron.id} className='chooseMacaron__item'>
                <img className='chooseMacaron__image' src={images[macaron.image]} alt="" />
                <p className='chooseMacaron__title'>{macaron.title}</p>
                <p className='chooseMacaron__subtitle'>{macaron.subtitle}</p>

                <div className="chooseMacaron__count">
                  <button
                    onClick={() => remove(macaron.id)}
                    className="chooseMacaron__btn"
                  >
                    -
                  </button>
                  <p className='chooseMacaron__showCount'>{qty}</p>
                  <button
                    onClick={() => add(macaron)}
                    className="chooseMacaron__btn"
                  >
                    +
                  </button>
                </div>
              </div>
            )
          })}

          <div className="chooseMacaron__right">
            <p className="chooseMacaron__countPrice">{totalSelected} из {draft.size} шт. <span className='chooseMacaron__span'>{draft.price} руб.</span></p>
            {draft.items.map((i) => (
              <div className='chooseMacaron__items' key={i.id}>
                <p className='chooseMacaron__name'>{i.title}</p>

                <div className="chooseMacaron__count">
                  <button
                    onClick={() => remove(i.id)}
                    className="chooseMacaron__btn"
                  >
                    -
                  </button>
                  <p className='chooseMacaron__showCount'>{i.quantity}</p>
                  <button
                    onClick={() => add(i)}
                    className="chooseMacaron__btn"
                  >
                    +
                  </button>
                </div>
                
              </div>
            ))}

            <div className="chooseMacaron__bottomLimit">
              <p className='chooseMacaron__limit'>Для продолжения количество макарон должно равняться {draft.size} шт.</p>
              <button
                onClick={() => {
                  if (totalSelected !== draft.size) {
                    alert(`Количество должно равняться ${draft.size}`);
                    return;
                  }

                  addKit({
                    id: Date.now(),
                    type: "bundle",
                    price: draft.price,
                    quantity: 1,
                    bundle: {
                      size: draft.size,
                      price: draft.price,
                      items: draft.items
                    }
                  });

                  resetKit();

                  navigate('/cart')
                }}
                className="chooseMacaron__finalBtn"
              >
                Добавить Набор
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseMacaron
