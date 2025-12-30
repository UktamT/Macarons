import type { ReactElement } from 'react'
import Error from './Error'

type Props = { children: ReactElement }

export default function ProtectedRoute({ children }: Props) {
  const token = localStorage.getItem('token')

  if (!token) {
    return (
      <div style={{padding:20, textAlign:'center'}}>
        <Error/>
      </div>
    )
  }

  return children
}