import { create } from "zustand";
import CartProduct from "../CartProduct";
import { IProduct } from "../models";

interface CartState{
    product: CartProduct[];
    addItemToCart: (item:IProduct) => void
}
const useCartStore = create<CartState>((set, get) => ({
    product: [],
  
    addItemToCart: (item) => {
      const itemExists = get().product.find(
        (product) => product.id === item.id
      );
  
      if (itemExists) {
        if (typeof itemExists.quantity === "number") {
          itemExists.quantity++;
        }
  
        set({ product: [...get().product] });
      } else {
        set({ product: [...get().product, { ...item, quantity: 1 }] });
      }
    },
  }));
export default useCartStore