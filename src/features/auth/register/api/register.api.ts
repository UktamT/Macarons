import axios from "axios"
import type { RegisterFormValues } from "../model/register.schema"

const API_URL = 'http://localhost:3002'

export const registerApi = async (data: RegisterFormValues) => {
  await axios.post(`${API_URL}/register`, {
    email: data.email,
    password: data.password,
    name: data.name,
    phone: data.phone,

  })

}