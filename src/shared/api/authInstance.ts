import axios from "axios";
import { useSessionStore } from "../store/authStore";



export const $api = axios.create({
  baseURL: 'http://localhost:3002',
});

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
});

$api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = '/signin';
      localStorage.removeItem('token');
      console.log('Пользователь не авторизован');
      useSessionStore.getState().logout()
    }
    return Promise.reject(error);
  }
);