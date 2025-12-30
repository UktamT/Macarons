import { useSessionStore } from "../../shared/store/authStore";
import { useNavigate } from "react-router-dom";
import '../../styles/Profile/profile.scss'; // Убедись, что стили там

const Profile = () => {
  const user = useSessionStore((state) => state.user);
  const logout = useSessionStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    localStorage.removeItem('token');
    alert('Вы успешно вышли из аккаунта');
    navigate('/');
  };

  if (!user) {
    return (
      <div className="profile-card profile-card--unauthorized">
        <p>Пользователь не авторизован</p>
        <button 
          onClick={() => navigate('/login')} 
          className="profile-card__btn"
        >
          Войти
        </button>
      </div>
    );
  }

  return (
    <div className="profile-card">
      <div className="profile-card__avatar">
        {user.name.charAt(0).toUpperCase()}
      </div>

      <h1 className="profile-card__title">{user.name}</h1>
      <p className="profile-card__email">{user.email}</p>
      <p className="profile-card__phone">{user.phone}</p>

      <div className="profile-card__divider"></div>

      <div className="profile-card__info-section">
        <div className="profile-card__info-item">
          <strong className="profile-card__info-label">Статус: </strong> 
          <span className="profile-card__info-value profile-card__info-value--active">
             Постоянный клиент
          </span>
        </div>
        <div className="profile-card__info-date">
          <strong className="profile-card__info-label">Дата регистрации: </strong> 
          <span className="profile-card__info-value">26.12.2025</span>
        </div>
      </div>

      <div className="profile-card__actions">
        <button 
          onClick={handleLogout} 
          className="profile-card__btn profile-card__btn--logout"
        >
          Выйти из аккаунта
        </button>

          <button onClick={() => navigate('/orders')} className="profile-card__btn">
            История заказов
          </button>
        
      </div>
    </div>
  );
};

export default Profile;