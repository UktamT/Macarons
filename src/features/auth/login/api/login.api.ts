import axios from "axios"
import type { LoginFormValues } from "../model/login.schema"
const API_URL = 'http://localhost:3002'

export const loginApi = async (data: LoginFormValues) => {
  const response = await axios.post(`${API_URL}/login`, {
    email: data.email,
    password: data.password,

  })
  localStorage.setItem('token', response.data.token)

  return response.data.user
  



}
