import { useCartStore } from '../../../features/cart/model/cartStore'

const CheckoutSection = () => {
  const totalPrice = useCartStore((state) => state.totalPrice());

  return (
    <section className='checkoutSection'>
      <p>Total Prices: {totalPrice} руб</p>
    </section>
  )
}

export default CheckoutSection