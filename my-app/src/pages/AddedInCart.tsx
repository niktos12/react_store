import { Header } from "../components/Header"
import { Link } from "react-router-dom"
import useCartStore from "../hooks/useStore"
import  CartItemCard  from "../components/CartItemCard"


export function AddedInCart(){
    const {cartItems} = useCartStore();

    if(cartItems && cartItems.length < 1){
        return(
            <div>
                <Header/>
                <h1 className="text-center text-4xl font-bold mt-20">Cart is empty</h1>
            </div>
        )

    }
    return(
        <div>
            <Header/>
            <h1 className="text-center text-4xl font-bold mt-20 mb-10">Cart</h1>
            <div className="grid grid-cols-[repeat(2,450px)] gap-4 justify-center">
        {cartItems?.map((item) => (
          <CartItemCard product={item}  key={item.id}/>
        ))}
      </div>

        </div>
    )
}