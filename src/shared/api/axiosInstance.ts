import axios from "axios";

export const api = axios.create({
  baseURL: 'https://6946da37ca6715d122f9117f.mockapi.io',
  timeout: 5000,
});