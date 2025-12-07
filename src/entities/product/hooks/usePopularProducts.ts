import { useEffect, useState } from "react";
import { getProductsUnLimited, getProducts, type ApiError } from "../api/getProducts";
import type { Product } from "../types/product";


export const usePopularProducts = (limit = false) => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<ApiError | null>(null)


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = limit ? await getProducts() : await getProductsUnLimited();
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
