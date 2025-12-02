import type { Product } from "../../../entities/product/types/product";

export interface CartItem { 
  id: number;
  title: string;
  subtitle: string;
  price: number;
  image: string;
  quantity: number;  
}

export interface CartState {
  state: CartItem[];
}

export interface CartActions {
  addToCart: (product: Product, quantity?: number) => void,
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeFromCart: (id: number) => void,
  clearCart: () => void,
  totalPrice: () => number,
}