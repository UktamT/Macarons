import '../../../styles/SignIn/signIn.scss'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, type LoginFormValues } from './model/login.schema'
import { loginApi } from './api/login.api'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const Login = () => {
  const navigate = useNavigate()
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  })

  const handleLogin = async (data: LoginFormValues) => {
    
    try {
      await loginApi(data)
      navigate('/')
      alert('Успешный вход!')
      
    } catch (error: unknown) {
      setErrorMsg('Неправильный логин либо пароль')
      if (process.env.NODE_ENV === 'development') {
        console.warn('Ошибка авторизации:', error);
      }
      
    }
  }

  return (
    <div className="container">
      <div className="login-modal">
        <h2 className="login-modal__title">Вход</h2>

        <form onSubmit={handleSubmit(handleLogin)} className="login-form">
          <div className="login-form__field">
            <p>E-mail</p>
            <input
              type="email"
              {...register('email')}
              placeholder="E-mail"
            />
            {errors.email && (
              <p className="login-form__error">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="login-form__field">
            <p>Пароль</p>
            <input
              type="password"
              {...register('password')}
              placeholder="Пароль"
            />
            {errors.password && (
              <p className="login-form__error">
                {errors.password.message}
              </p>
            )}

            <button
              type="button"
              className="login-form__forgot"
            >
              Забыли пароль?
            </button>
          </div>

          <button className="login-form__submit">
            Вход
          </button>

          {errorMsg && <p style={{color: 'red'}}>{errorMsg}</p>}
        </form>

        <p className="login-modal__footer">
          Еще не зарегистрированы?{' '}
          <Link className='login-modal__exist' to={'/signup'}>Зарегистрироваться</Link>
        </p>
      </div>
    </div>
  )
}
