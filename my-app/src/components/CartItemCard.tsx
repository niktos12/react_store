import { Minus, Plus, X } from "lucide-react";
import React from "react";
import CartProduct from "../CartProduct";
import useCartStore from "../hooks/useStore";

interface CartItemCardProps {
  product: CartProduct;
}

const CartItemCard: React.FC<CartItemCardProps> = ({ product }) => {
  const { increaseQuantity, decreaseQuantity , removeItemFromCart} =
  useCartStore();
const onIncreaseQuantity = (productId: number) => {
  increaseQuantity(productId);
};

const onDecreaseQuantity = (productId: number) => {
  decreaseQuantity(productId);
};


const onRemoveItem = (productId: number) => {
  removeItemFromCart(productId);
};

  return (
    <div 
    className="flex flex-col gap-5 bg-white p-5 rounded-3xl shadow-xl justify-center items-center">
      <div className="flex flex-col items-center gap-5 items-center">
        <img
          className=" w-[225px] h-[225px] object-contain"
          src={product.image}
          alt={product.title}
        />
        <div className="my-5 flex flex-col gap-5 items-center justify-center">
          <h3 className="text-center font-bold">{product.title}</h3>
          <h3 className="text-center font-medium">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </h3>
          <h3 className="text-center font-medium">
            Quantity: {product.quantity}
          </h3>
        </div>
      </div>

      <div className="flex justify-center items-center gap-5 mb-2">
        <button
          onClick={() => onIncreaseQuantity(product.id)}
          title="Increase quantity"
          className="bg-orange-500 px-2 py-2 text-white rounded-full"
        >
          <Plus />
        </button>
        <button
          onClick={() => onDecreaseQuantity(product.id)}
          title="Decrease Quantity"
          className="bg-orange-500 px-2 py-2 text-white rounded-full"
        >
          <Minus />
        </button>
        <button
          onClick={() => onRemoveItem(product.id)}
          title="Remove item from cart"
          className="bg-orange-500 px-2 py-2 text-white rounded-full"
        >
          <X />
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;