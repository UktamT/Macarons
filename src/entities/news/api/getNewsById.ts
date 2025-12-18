import { api } from "../../../shared/api/axiosInstance";
import type { News } from "../types/News.types"

export const getNewsById = async (id: number): Promise<News> => {
  const response = await api.get<News>(`/news/${id}`);
  return response.data;
}