import axios from "axios";

export const apiMacaron = axios.create({
  baseURL: 'https://6946dac1ca6715d122f912c9.mockapi.io',
  timeout: 5000,
});