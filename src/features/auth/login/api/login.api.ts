import type { LoginFormValues } from "../model/login.schema"
import { useSessionStore } from "../../../../shared/store/authStore"
import { $api } from "../../../../shared/api/authInstance"

export const loginApi = async (data: LoginFormValues) => {
  const response = await $api.post(`/login`, {
    email: data.email,
    password: data.password,

  })
  localStorage.setItem('token', response.data.token)

  useSessionStore.getState().setUser(response.data.user);

  return response.data.user
   



}
