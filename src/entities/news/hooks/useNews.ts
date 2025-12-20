import { useEffect, useState } from "react";
import type { News } from "../types/News.types";
import { getNews } from "../api/getNews";

export const useNews = () => {
  const [news, setNews] = useState<News[]>([]); // <-- массив
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNews(); // getNews должен возвращать News[]
        setNews(data); // сразу массив
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return { news, loading } as const;
};
