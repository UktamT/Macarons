import React, { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';

import { useCartStore } from '../../../features/cart/model/cartStore'; 
import { useOrderStore } from '../../../shared/store/orderStore'; 

import "react-datepicker/dist/react-datepicker.css";
import '../../../styles/Checkout/CheckoutSection.scss';

import image1 from '../../../shared/assets/Checkout/Group 18 (1).png';
import image2 from '../../../shared/assets/Checkout/Group 223.png';
import { useSessionStore } from '../../../shared/store/authStore';

const schema = z.object({
  name: z.string().min(2, "Введите имя"),
  phone: z.string().min(10, "Введите корректный номер"),
  deliveryMethod: z.enum(['courier', 'pickup']),
  address: z.string().optional(),
  date: z.date().nullable().refine((val) => val !== null, "Выберите дату"),
  time: z.string(),
  paymentMethod: z.string(),
}).refine((data) => {
  if (data.deliveryMethod === 'courier') {
    return !!data.address && data.address.length > 5;
  }
  return true;
}, {
  message: "Укажите адрес доставки",
  path: ["address"],
});

type FormData = z.infer<typeof schema>;

const Checkout: React.FC = () => {
  const navigate = useNavigate();

  const cartItems = useCartStore((state) => state.state);
  const clearCart = useCartStore((state) => state.clearCart);
  const getTotalCartPrice = useCartStore((state) => state.totalPrice());

  const user = useSessionStore((state) => state.user)

  const addOrder = useOrderStore((state) => state.addOrder);

  const { register, handleSubmit, control, watch, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      deliveryMethod: 'pickup',
      paymentMethod: 'cash',
      date: new Date(),
      time: '12-16',
      address: ''
    }
  });

  const delivery = watch('deliveryMethod');
  const payment = watch('paymentMethod');

  const deliveryCost = delivery === 'courier' ? 400 : 0;
  const finalPrice = getTotalCartPrice + deliveryCost;

  useEffect(() => {
    if (delivery === 'pickup') {
      setValue('address', '');
    }
  }, [delivery, setValue]);

  const onSubmit = (data: FormData) => {
    if (cartItems.length === 0) {
      alert("Корзина пуста. Добавьте товары перед оформлением");
      return;
    }

    const newOrder = {
      id: `ORDER-${Date.now().toString().slice(-6)}`,
      userId: user?.email || 'guest',
      items: cartItems,
      deliveryInfo: {
        ...data,
        date: data.date ? data.date.toLocaleDateString() : '',
      },
      totalPrice: finalPrice,
      createdAt: new Date().toLocaleString(),
    };

    addOrder(newOrder);
    clearCart();
    
    alert("Заказ успешно оформлен!");
    navigate('/orders');
  };

  return (
    <div className="delivery-container">
      <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="order-form__title">Доставка</h2>
        <p className="order-form__subtitle">Укажите контактные данные и выберите способ доставки</p>

        <div className="order-form__row">
          <div className="order-form__field">
            <p className="order-form__label-text">Ваше имя*</p>
            <input 
              {...register('name')} 
              className={`order-form__input ${errors.name ? 'order-form__input--error' : ''}`} 
              placeholder="Имя" 
            />
            {errors.name && <span className="error-text">{errors.name.message}</span>}
          </div>
          <div className="order-form__field">
            <p className="order-form__label-text">Ваш телефон*</p>
            <input 
              {...register('phone')} 
              className={`order-form__input ${errors.phone ? 'order-form__input--error' : ''}`} 
              placeholder="Телефон" 
            />
            {errors.phone && <span className="error-text">{errors.phone.message}</span>}
          </div>
        </div>

        <div className="order-form__section">
          <p className="order-form__label-text">Способ доставки:</p>
          <div className="delivery-methods">
            <label className={`delivery-methods__item ${delivery === 'courier' ? 'delivery-methods__item--active' : ''}`}>
              <input type="radio" value="courier" {...register('deliveryMethod')} className="delivery-methods__hidden-input" />
              <div className="delivery-methods__icon"><img src={image1} alt="Courier" /></div>
              <div className="delivery-methods__info">
                <span className="delivery-methods__name">Курьерская доставка</span>
                <span className="delivery-methods__price delivery-methods__price--red">400 руб.</span>
              </div>
            </label>

            <label className={`delivery-methods__item ${delivery === 'pickup' ? 'delivery-methods__item--active' : ''}`}>
              <input type="radio" value="pickup" {...register('deliveryMethod')} className="delivery-methods__hidden-input" />
              <div className="delivery-methods__icon"><img src={image2} alt="Pickup" /></div>
              <div className="delivery-methods__info">
                <span className="delivery-methods__name">Самовывоз</span>
                <span className="delivery-methods__price delivery-methods__price--green">Бесплатно</span>
              </div>
            </label>
          </div>
        </div>

        <div className="order-form__field">
          <p className="order-form__label-text">Адрес доставки</p>
          <input 
            {...register('address')} 
            className={`order-form__input ${errors.address ? 'order-form__input--error' : ''}`} 
            disabled={delivery === 'pickup'} 
            placeholder={delivery === 'pickup' ? "При самовывозе адрес не нужен" : "Укажите адрес"}
          />
          {errors.address && <span className="error-text">{errors.address.message}</span>}
        </div>

        <div className="order-form__row">
          <div className="order-form__field">
            <p className="order-form__label-text">Дата получения</p>
            <div className="order-form__datepicker-wrapper">
              <Controller
                control={control}
                name="date"
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={(date: Date | null) => field.onChange(date)}
                    dateFormat="dd.MM.yyyy"
                    minDate={new Date()}
                    className="order-form__input order-form__input--datepicker"
                  />
                )}
              />
            </div>
          </div>
          <div className="order-form__field">
            <p className="order-form__label-text">Время</p>
            <select {...register('time')} className="order-form__select">
              <option value="12-16">12:00 - 16:00</option>
              <option value="16-20">16:00 - 20:00</option>
            </select>
          </div>
        </div>

        <div className="order-form__section">
          <p className="order-form__label-text">Метод оплаты</p>
          <div className="payment-methods">
            {[
              { id: 'card', label: 'Оплата картой онлайн' },
              { id: 'cash', label: 'Наличными при получении' },
              { id: 'yandex', label: 'Яндекс деньги' }
            ].map((m) => (
              <label key={m.id} className="payment-methods__item">
                <input type="radio" value={m.id} {...register('paymentMethod')} className="payment-methods__hidden-input" />
                <div className={`payment-methods__custom-checkbox ${payment === m.id ? 'payment-methods__custom-checkbox--active' : ''}`} />
                <span className="payment-methods__text">{m.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="order-form__footer">
          <div className="order-form__total">
            Итоговая сумма заказа вместе с доставкой: 
            <span className="order-form__total-price"> {finalPrice} руб.</span>
          </div>
          <button type="submit" className="order-form__submit">Оформить заказ</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;