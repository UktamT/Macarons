import { useSessionStore } from "../../shared/store/authStore"
import { useNavigate } from "react-router-dom"

const Profile = () => {
  const user = useSessionStore((state) => state.user)
  const navigate = useNavigate()

  return (
    <div>
      <h1>profile</h1>
      <button onClick={() => { navigate('/'); localStorage.removeItem('token'); alert('Вы успешно вышли из аккаунта')}}>Выйти из аккаунта</button>
      <p>{user?.name}</p>
    </div>

  )
}

export default Profile