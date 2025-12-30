import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { cartKitType } from "../../features/cart/types/storeTypes";

interface Order {
  id: string;
  userId: string;
  items: cartKitType[];
  deliveryInfo: {
    name: string;
    phone: string;
    deliveryMethod: string;
    address?: string;
    date: string;
    time: string;
    paymentMethod: string;
  };
  totalPrice: number;
  createdAt: string;
}

interface OrderState {
  orders: Order[];
  addOrder: (order: Order) => void;
}

export const useOrderStore = create<OrderState>()(
  persist(
    (set) => ({
      orders: [],
      addOrder: (order) => set((state) => ({ 
        orders: [order, ...state.orders] 
      })),
    }),
    { name: 'orders-history' }
  )
);