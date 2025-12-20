import { api } from "../../../shared/api/axiosInstance";
import type { News} from "../types/News.types";

export const getNews = async (): Promise<News[]> => {
  const response = await api.get<News[]>("/news");
  return response.data
}