import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
export function Header(){
    return(
        <div 
            className="flex flex-row justify-around items-center p-4"
        >
            <Toaster position="top-center"/>
            <a
             className="text-3xl font-bold select-none"
             href="/"
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
                <Link to={"/cart"}><BsCart4 className="text-2xl cursor-pointer"/></Link>
            </div>
        </div>
    )
}