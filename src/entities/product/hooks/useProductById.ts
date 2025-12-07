import { useEffect, useState } from "react";
import { getProductById, type ApiError } from "../api/getProductById";
import type { Product } from "../types/product";


export const useProductById = (id: number) => {
  const [products, setProducts] = useState<Product>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<ApiError | null>(null)


  useEffect(() => {

    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProducts(data);
      } catch (err) {
        setError(err as ApiError)
        console.error(err)
      } finally {
        setLoading(false)
      }
    };

    fetchProduct()
  }, [id])

  return { products, loading, error} as const;
}
