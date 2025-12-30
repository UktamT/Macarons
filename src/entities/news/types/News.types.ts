export interface News {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  date?: string;
  description: string;
  hashtags: string[];
}