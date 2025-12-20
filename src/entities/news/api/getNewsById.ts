import { api } from "../../../shared/api/axiosInstance";
import type { News } from "../types/News.types"

export const getNewsById = async (id: number): Promise<News | undefined> => {
  const response = await api.get<News[]>(`/news`);
  const products = response.data;
  return products.find(item => item.id === id);
}