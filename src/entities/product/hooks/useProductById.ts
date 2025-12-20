import { useEffect, useState } from "react";
import { getProductById } from "../api/getProductById";
import type { Product } from "../types/product";


export const useProductById = (id: number) => {
  const [products, setProducts] = useState<Product>([] as unknown as Product)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState< null>(null)


  useEffect(() => {

    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProducts(data as Product);
      } catch (err) {
        setError(err as null)
        console.error(err)
      } finally {
        setLoading(false)
      }
    };

    fetchProduct()
  }, [id])

  return { products, loading, error} as const;
}
