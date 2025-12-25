import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'

type Props = { children: ReactElement }

export default function ProtectedRoute({ children }: Props) {
  const token = localStorage.getItem('token')

  if (!token) {
    return (
      <div style={{padding:20, textAlign:'center'}}>
        <h2>Доступ запрещён</h2>
        <p>У вас нет доступа к этой странице. Пожалуйста, <Link to="/signin">войдите</Link> или <Link to="/signup">зарегистрируйтесь</Link>.</p>
      </div>
    )
  }

  return children
}