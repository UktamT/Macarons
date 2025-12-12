import { useEffect, useState } from "react";
import type { Macaron } from "../../macarons/types/macaron.types";
import { getMacaron } from "../api/getMacaron";


export const useMacaron = () => {
  const [macaron, setMacaron] = useState<Macaron[]>([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getMacaron();
        setMacaron(data);
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    };

    fetchProduct()
  }, [])

  return { macaron, loading} as const;
}
