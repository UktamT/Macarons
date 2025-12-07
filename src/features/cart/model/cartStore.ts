import { create } from "zustand";
import type { CartState, CartActions } from "../types/storeTypes";
import type { Product } from "../../../entities/product/types/product";

type CartStore = CartState & CartActions;

export const useCartStore = create<CartStore>((set, get) => ({
  state: [],

  addToCart: (product: Product, quantity = 1) => {
    set((state) => {
      const exist = state.state.find((item) => item.id === product.id);

      if (exist) {
        return {
          state: state.state.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity } 
              : item
          ),
        };
      }

      return {
        state: [...state.state, { ...product, quantity }],
      };
    });
  },

  increaseQuantity: (productId: number) => {
    set((state) => ({
      state: state.state.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }));
  },

  decreaseQuantity: (productId: number) => {
    set((state) => {
      const exist = state.state.find((item) => item.id === productId);
      if (!exist) return state;

      if (exist.quantity === 1) {
        return {
          state: state.state.filter((item) => item.id !== productId),
        };
      }

      return {
        state: state.state.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        ),
      };
    });
  },

  removeFromCart: (id: number) => {
    set((state) => ({
      state: state.state.filter((item) => item.id !== id),
    }));
  },

  clearCart: () => {
    set({ state: [] });
  },

  totalPrice: () => {
    const totalPriceState = get().state;
    return totalPriceState.reduce((acc, item) => acc + item.price * item.quantity, 0);
  },
}));
