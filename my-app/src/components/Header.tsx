import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import useCartStore from "../hooks/useStore";
export function Header(){
    const {cartItems} = useCartStore();
    const cartCount = cartItems.length
    return(
        <div 
            className="flex flex-row justify-around items-center p-4"
        >
            <Toaster position="top-center"/>
            <a
             className="text-3xl font-bold select-none"
             href=""
            >
                <span className="text-yellow-500">Mi</span>Clothes
            </a>
            <div 
                className="flex flex-row gap-4 items-center"
            >
                <a 
                    href=""
                    className="text-xl"
                >
                    Promotions
                </a>
                <a 
                    href=""
                    className="text-xl"
                >
                    Catalogs
                </a>
                <a 
                    href=""
                    className="text-xl"
                >
                    Contacts
                </a>
                <a 
                    href=""
                    className="text-xl"
                >
                    Reviews
                </a>
                <Link to={"/cart"} className="flex">
                    <BsCart4 className="text-2xl cursor-pointer"/>
                    {cartCount > 0 && (
                  <span className="ml-1 py-1 px-2 text-orange-500 text-sm font-bold rounded-full bg-white shadow-xl border">
                    {cartCount}
                  </span>
                )}
                </Link>
            </div>
        </div>
    )
}