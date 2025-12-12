import { create } from "zustand";
import type { BundleStore, Macaron } from "../types/createKitStore.types";

export const useKitStore = create<BundleStore>((set) => ({
  draft: null,

  start: (size: number, price: number) => 
    set({
      draft: {
        size,
        price,
        items: [] as Macaron[],
      }
    }),

  add: (macaron: Macaron) => 
    set((state) => {

      if(!state.draft) return state

      const { items, size } = state.draft;

      const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);

      if (totalQty >= size) {
        return state;
      }

      const exist = state.draft.items.find((item) => item.id === macaron.id)
      if(exist) {
        return {
          draft: {
            ...state.draft,
            items: state.draft.items.map((item) =>
              item.id === macaron.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          }
        }
      }

      return {
        draft: {
          ...state.draft,
          items: [...state.draft.items, {...macaron, quantity: 1}]
        }
      }

  }),

  remove: (id: number) => set((state) => {
    if(!state.draft) return state;

    const items = state.draft.items;
    const macaron = items.find((i) => i.id === id);

    if(!macaron) return state;

    if(macaron.quantity > 1) {
      return {
        draft: {
          ...state.draft,
          items: items.map((i) => {
            if(i.id === id) {
              return {...i, quantity: i.quantity - 1}
            }
            return i
          })
        }
      }
    }

    return {
      draft: {
        ...state.draft,
        items: items.filter((i) => i.id !== id)
      }
    }
  }),

  reset: () => set({ draft: null }),
}));
