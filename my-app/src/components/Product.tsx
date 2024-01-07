import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps{
    product: IProduct;
}

export function Product({ product } : ProductProps){

    const [details, setDetails] = useState(false);
    
    return(
        <div 
            className="bg-white rounded p-4 flex flex-col shadow-xl"
        >
            <img src={product.image} className="w-[150px]"/>
            <p className="font-bold text-xl">{product.title}</p>
            <p className="font-bold text-lg">{product.price}</p>

            <div className="flex flex-row">
                <button className="bg-yellow-500">Add to cart</button>
                <button className="bg-black text-white">Details</button>
            </div>
            
        </div>
    )
}