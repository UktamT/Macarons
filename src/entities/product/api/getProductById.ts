import { api } from "../../../shared/api/axiosInstance";
import type { Product } from "../types/product";

export const getProductById = async (id: number): Promise<Product | undefined> => {
  const response = await api.get<Product[]>("/products");
  const products = response.data;
  return products.find(item => item.id === id);
};
