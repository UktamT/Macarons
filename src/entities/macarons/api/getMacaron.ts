import { apiMacaron } from "../../../shared/api/macaronsInstance";
import type { Macaron } from "../types/macaron.types";

export const getMacaron = async (): Promise<Macaron[]> => {
  const response = await apiMacaron.get<Macaron[]>("/api");
  return response.data
}