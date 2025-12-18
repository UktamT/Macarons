import type { Product } from "../../../entities/product/types/product";
import type { Macaron } from "../../../shared/types/createKitStore.types";

export interface CartItem { 
  type: "product";
  id: number;
  title: string;
  subtitle: string;
  price: number;
  image: string;
  quantity: number;  
}

export interface kitType {
  id: number;
  type: "bundle";
  price: number;
  quantity: number;
  bundle: {
    size: number;
    price: number;
    items: Macaron[];
  };
}


export type cartKitType = CartItem | kitType

export interface CartState {
  state: cartKitType[];
}

export interface CartActions {
  addToCart: (product: Product, quantity?: number) => void,
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeFromCart: (id: number) => void,
  clearCart: () => void,
  totalPrice: () => number,
  addKit: (kit: kitType) => void,
}