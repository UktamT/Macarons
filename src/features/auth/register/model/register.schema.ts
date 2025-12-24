import { z } from 'zod'

export const registerSchema = z.object({
  email: z.string().email('Введите корректный email'),
  password: z.string().min(6, 'Пароль должен содержать не менее 6 символов'),
  name: z.string().min(2, 'Имя должно содержать не менее 2 символов'),
  phone: z.string().min(8, 'Необходимо ввести корректный номер телефона'),
})

export type RegisterFormValues = z.infer<typeof registerSchema>