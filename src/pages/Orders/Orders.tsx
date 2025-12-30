import { useOrderStore } from '../../shared/store/orderStore';
import { useSessionStore } from '../../shared/store/authStore'; // Добавили импорт
import '../../styles/Orders/orders.scss';
import type { cartKitType } from '../../features/cart/types/storeTypes'; 

const Orders = () => {
  const orders = useOrderStore((state) => state.orders);
  const user = useSessionStore((state) => state.user);
  const userOrders = orders.filter(order => order.userId === user?.email);

  if (!user) {
    return (
      <div className="orders-empty">
        <h2>Войдите в аккаунт, чтобы увидеть историю заказов</h2>
      </div>
    );
  }

  if (userOrders.length === 0) {
    return (
      <div className="orders-empty">
        <h2>У вас пока нет заказов</h2>
      </div>
    );
  }

  return (
    <div className="orders-container">
      <h1 className="orders-title">История ваших заказов</h1>
      
      <div className="orders-list">
        {userOrders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <span className="order-id">Заказ №{order.id}</span>
              <span className="order-date">{order.createdAt}</span>
            </div>

            <div className="order-body">
              <div className="order-items">
                <strong>Состав заказа:</strong>
                {order.items.map((item: cartKitType, index: number) => {
                  if (item.type === "product") {
                    return (
                      <div key={`prod-${item.id}-${index}`} className="order-item order-item--product">
                         <span>{item.title}</span>
                         <span className="order-item__count"> - Количество {item.quantity}</span>
                      </div>
                    );
                  }
                  
                  if (item.type === "bundle") {
                    return (
                      <div key={`kit-${item.id}-${index}`} className="order-item order-item--kit">
                        <div className="order-item__kit-title">
                          <span>Набор макарон ({item.bundle.size} шт.)</span>
                          <span className="order-item__count"> - Количество {item.quantity}</span>
                        </div>
                        <ul className="order-item__kit-details">
                          {item.bundle.items.map((_, idx) => (
                            <li key={`${item.id}-mac-${idx}`}></li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  
                  return null;
                })}
              </div>

              <div className="order-info">
                <strong>Доставка:</strong>
                {order.deliveryInfo ? (
                  <>
                    <p>
                      {order.deliveryInfo.deliveryMethod === 'courier' 
                        ? `Курьером: ${order.deliveryInfo.address}` 
                        : 'Самовывоз'}
                    </p>
                    <p>Получатель: {order.deliveryInfo.name}</p>
                    <p>Телефон: {order.deliveryInfo.phone}</p>
                  </>
                ) : (
                  <p>Информация о доставке отсутствует</p>
                )}
              </div>
            </div>

            <div className="order-footer">
              <span className="order-total-price">
                Итого: <strong>{order.totalPrice}</strong>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;