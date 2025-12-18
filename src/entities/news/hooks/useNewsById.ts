import { useEffect, useState } from "react";
import { getNewsById } from "../api/getNewsById";
import type { News } from "../types/News.types";

export const useNewsById = (id: number) => {
  const [news, setNews] = useState<News>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)  
  useEffect(() => {

    const fetchNews = async () => { 
      try {
        const data = await getNewsById(id);
        setNews(data);
      } catch (err) {
        setError(err as Error)
        console.error(err)
      }
      finally {
        setLoading(false)
      }
    };
    fetchNews()
  }, [id])
  return { news, loading, error } as const;
}
