import '../../../styles/SignIn/signIn.scss'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, type LoginFormValues } from './model/login.schema'
import { loginApi } from './api/login.api'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()

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
      
    } catch (error) {
      console.error('Login error:', error)}
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
        </form>

        <p className="login-modal__footer">
          Еще не зарегистрированы?{' '}
          <span>Зарегистрироваться</span>
        </p>
      </div>
    </div>
  )
}
