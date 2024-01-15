import { IProduct } from "./models";

type CartProduct = IProduct & {
  quantity: number;
};

export default CartProduct;