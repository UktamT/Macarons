export interface Macaron {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  image: string;
  quantity: number;
}

export interface DraftBundle {
  size: number;
  price: number;
  items: Macaron[];
}

export interface BundleStore {
  draft: DraftBundle | null;
  start: (size: number, price: number) => void;
  add: (macaron: Macaron) => void;
  remove: (id: number) => void;
  reset: () => void;
}