import { BsCart4 } from "react-icons/bs";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import useCartStore from "../hooks/useStore";
export function Header(){
    const {cartItems} = useCartStore();
    const [scrolled, setScrolled] = useState<'scrolled' | 'notScrolled'>('notScrolled');
    const cartCount = cartItems.length

    
    useEffect(() => {
        const handleScrolled = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            setScrolled(scrollTop > 0 ? 'scrolled' : 'notScrolled') 
        }
        window.addEventListener('scroll', handleScrolled);
        return () => {
            window.removeEventListener('scroll', handleScrolled);
        }
    }, [] );
    return(
        <div 
            className="flex flex-row justify-around items-center p-4 sticky top-0 z-10 duration-500"
            style={{backgroundColor: scrolled === 'scrolled' ? 'black' : 'transparent'}}
        >
            <Toaster position="top-center"/>
            <Link
             className="text-3xl font-bold select-none"
             style={{color: scrolled === 'scrolled' ? 'white' : 'black'}}
             to="/react_store"
            >
                <span className="text-yellow-500">Mi</span>Store
            </Link>
            <div 
                className="flex flex-row gap-4 items-center"
                style={{color: scrolled === 'scrolled' ? 'white' : 'black'}}
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