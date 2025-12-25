import { $api } from "../../../../shared/api/authInstance"
import type { RegisterFormValues } from "../model/register.schema"

export const registerApi = async (data: RegisterFormValues) => {
  await $api.post(`/register`, {
    email: data.email,
    password: data.password,
    name: data.name,
    phone: data.phone,

  })

}