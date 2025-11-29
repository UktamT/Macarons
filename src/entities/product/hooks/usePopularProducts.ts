import { useEffect, useState } from "react";
import { getProducts, type ApiError } from "../api/getProducts";
import type { Product } from "../types/product";


export const usePopularProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<ApiError | null>(null)


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError(err as ApiError)
        console.error(err)
      } finally {
        setLoading(false)
      }
    };

    fetchProduct()
  }, [])

  return { products, loading, error} as const;
}
