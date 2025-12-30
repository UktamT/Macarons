import { useState } from 'react'
import { useForm } from 'react-hook-form'
import '../../../styles/SignUp/signUp.scss'
import type { RegisterFormValues } from './model/register.schema'
import { zodResolver} from '@hookform/resolvers/zod'
import  { registerSchema } from './model/register.schema'
import { registerApi } from './api/register.api'
import { useNavigate, Link } from 'react-router-dom'


export function Register() {
  const navigate = useNavigate()
  const [serverError, setServerError] = useState<string | null>(null)
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormValues>({ resolver: zodResolver(registerSchema) })

const onSubmit = async (data: RegisterFormValues) => {
  try {
    await registerApi(data)
    setServerError(null)
    alert('Регистрация прошла успешно! Пожалуйста, войдите в систему.')
    navigate('/signin')
  } catch (error) {
    setServerError('Пользователь с таким email уже существует')
    console.error('Registration error:', error)
  }
}


  return (
    <div className="register-modal">

      <h2 className="register-modal__title">
        Получите доступ к оптовым ценам
      </h2>
      <p className="register-modal__subtitle">
        Пройдите регистрацию
      </p>

      <form
        className="register-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="register-form__grid">
          <div className="form-field">
            <p>Ваше имя</p>
            <input
              placeholder="Укажите имя"
              {...register('name')}
            />
            <p className={'register-form__mistake'}>{errors.name && errors.name.message}</p>
          </div>

   

          <div className="form-field">
            <p>Ваш телефон</p>
            <input
              placeholder="+7 (___) ___-__-__"
              {...register('phone')}
            />
            <p className={'register-form__mistake'}>{errors.phone && errors.phone.message}</p>
          </div>

          <div className="form-field">
            <p>E-mail</p>
            <input
              placeholder="Укажите e-mail"
              {...register('email')}

            />
            <p className={'register-form__mistake'}>{errors.email && errors.email.message}</p>
          </div>

          <div className="form-field">
            <p>Придумайте пароль</p>
            <input
              type="password"
              {...register('password')}
            />
            <p className={'register-form__mistake'}>{errors.password && errors.password.message}</p>
          </div>
        </div>

        <button className="register-form__submit">
          Отправить заявку на регистрацию
        </button>
      </form>

      <p className="register-modal__login">
        Уже зарегистрированы? <Link to={'/signin'}>Войти</Link>
      </p>

      <p className="register-modal__policy">
        Нажимая на кнопку «Отправить заявку на регистрацию» я принимаю и
        соглашаюсь с Договором оферты и разрешаю обработку
        моих персональных данных в соответствии с
        Политикой конфиденциальности
      </p>

      {serverError && <p className="register-form__server-error">{serverError}</p>}
    </div>
  )
}
