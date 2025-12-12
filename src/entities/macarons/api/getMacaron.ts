import { api } from "../../../shared/api/axiosInstance";
import type { Macaron } from "../types/macaron.types";

export const getMacaron = async (): Promise<Macaron> => {
  const response = await api.get<Macaron>("/macarons");
  return response.data
}