import { api } from "../../../shared/api/axiosInstance";
import type{ Product } from "../types/product";
import type { AxiosError } from "axios";

export interface ApiError {
  message: string;
  status?: number;
}

export const getProductById = async(id: number): Promise<Product> => {
  try {
    const response = await api.get<Product>(`/products/${id}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ message?: string }>;
    
    const apiError: ApiError = {
      message: axiosError.response?.data?.message || axiosError.message || "Ошибка при загрузке продуктов",
      status: axiosError.response?.status,
    };
    
    throw apiError;
  }
}