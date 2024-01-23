import { BsCart4 } from "react-icons/bs";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import useCartStore from "../hooks/useStore";
import { IoMenu } from "react-icons/io5";


export function Header(){
    const {cartItems} = useCartStore();
    const [scrolled, setScrolled] = useState<'scrolled' | 'notScrolled'>('notScrolled');
    const [showMenu, setShowMenu] = useState<boolean>(false);
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
            className="flex flex-row justify-around items-center p-4 sticky top-0 z-10 duration-500 sm:flex-col"
            style={{backgroundColor: scrolled === 'scrolled' ? 'black' : 'transparent' , color: scrolled === 'scrolled' ? 'white' : 'black'}}
        >
            <Toaster position="top-center"/>
            <div className="flex flex-row gap-4 justify-between w-[80%]">
                <Link
             className="text-3xl font-bold select-none flex-row"
             to="/react_store"
            >
                <span className="text-yellow-500">Mi</span>Store
            </Link>
            <div 
                className="flex flex-row gap-4 items-center"
            >
                <a 
                    href=""
                    className="text-xl sm:hidden"
                >
                    Promotions
                </a>
                <a 
                    href=""
                    className="text-xl sm:hidden"
                >
                    Catalogs
                </a>
                <a 
                    href=""
                    className="text-xl sm:hidden"
                >
                    Contacts
                </a>
                <a 
                    href=""
                    className="text-xl sm:hidden"
                >
                    Reviews
                </a>
                <Link to={"/cart"} className="flex">
                    <BsCart4 className="text-2xl cursor-pointer hover:text-yellow-500 hover:duration-300 ease-in"/>
                    {cartCount > 0 && (
                  <span className="ml-1 py-1 px-2 text-orange-500 text-sm font-bold rounded-full bg-white shadow-xl border">
                    {cartCount}
                  </span>
                )}
                </Link>
                <IoMenu 
                    className="text-3xl sm:flex hidden cursor-pointer hover:text-yellow-500 hover:duration-300 ease-in"
                    onClick={() => setShowMenu(!showMenu)}
                />
            </div>
            </div>
            
            {showMenu && 
                <div className="hidden sm:flex sm:flex-col items-center justify-center pt-3">
                    <ul className="flex flex-col gap-3 text-center ">
                        <li>
                            <a 
                                href=""
                                className="text-xl font-bold hover:text-yellow-500 hover:duration-500 ease-out" 
                            >Promotions</a>
                        </li>
                        <li>
                            <a 
                                href=""
                                className="text-xl font-bold hover:text-yellow-500 hover:duration-500 ease-in"
                            >Catalogs</a>
                        </li>
                        <li>
                            <a 
                                href=""
                                className="text-xl font-bold hover:text-yellow-500 hover:duration-500 ease-in"
                            >Contacts</a>
                        </li>
                        <li>
                            <a 
                                href=""
                                className="text-xl font-bold hover:text-yellow-500 hover:duration-500 ease-in"
                            >Reviews</a>
                        </li>
                    </ul>
                </div>
            }
        </div>
    )
}