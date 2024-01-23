import { Header } from "../components/Header";
import { IProduct } from "../models";
import {useParams} from "react-router-dom";
import {useProducts} from "../hooks/products";
import { BsFillStarFill } from "react-icons/bs";
import { Loading } from "../components/Loading";
import  useCartStore  from "../hooks/useStore";
import { toast } from "react-hot-toast";
import { useState } from "react";


          

interface ProductProps{
    product: IProduct;
}
export function ProductInfo(props : any) {
    const {products} = useProducts();
    const {id} = useParams();
    const {addItemToCart} = useCartStore();

    const product = products.find((product) => product.id === Number(id));    

    const {loading, error} = useProducts();
    const [openModel, setOpenModel] = useState(false);

    const handleImageClick = () => {
        setOpenModel(true);
      };
      const handleModalClose = () => {
        setOpenModel(false);
      };

    const onAddToCart = () => {
        addItemToCart(product as IProduct);
        toast.success("Added to cart", {});
      };

    return(
        
        <div className="">
            <Header/>
            <div 
                className="flex flex-row justify-center gap-20 items-start mt-20 bg-slate-200 shadow-lg p-20 lg:p-10 lg:gap-10 md:flex-col xm:p-5 "
            >
                {loading && <Loading />}
                {openModel && 
                    <div 
                        className="fixed bg-black/50 top-0 right-0 left-0 bottom-0 z-20 flex justify-center items-center" 
                        onClick={handleModalClose}
                    >
                        <div 
                            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer z-30"
                        >
                            <img 
                                src={product?.image} 
                                alt={product?.title} 
                                className="max-width-[90%] max-height-[90%]" 
                            />
                        </div>
                    </div>}
                <div className="md:flex md:justify-center md:items-center md:w-full">
                    <img 
                        src={product?.image} 
                        alt="" 
                        className="w-[500px] rounded-3xl max-w-none x:w-[350px] lg:w-[300px] md:w-[50%] xm:w-[60%] xs:w-[75%]"
                        onClick={handleImageClick}
                    />
                </div>
                <div className="bg-white p-4 rounded-3xl">
                    <h1 
                        className="text-3xl font-bold mb-4 text-center xm:text-2xl"
                    >
                        {product?.title}
                    </h1>
                    <p 
                        className="text-xl xm:text-lg"
                    >
                        {product?.description}
                    </p>
                    <p 
                        className="text-2xl mt-4 font-bold xm:text-xl"
                    >
                        Category: {product?.category}
                    </p>
                    <button
                        onClick={onAddToCart} 
                        className="bg-yellow-500 text-white rounded-2xl px-4 py-2 mt-4 hover:bg-yellow-600 duration-300 font-bold "
                    >
                        Buy for {product?.price}$
                    </button>
                    <div className="flex flex-col">
                        <h1 
                            className="font-bold text-3xl mt-4 text-center xm:text-2xl"
                        >
                            Rating:
                        </h1>
                        <div 
                            className="flex flex-row gap-2 items-center"
                        >
                            <BsFillStarFill 
                                className="text-yellow-500 text-3xl xm:text-2xl"
                            />
                            <h2 
                                className="text-3xl font-bold xm:text-2xl"
                            >
                                {product?.rating.rate}/5
                            </h2>
                        </div>
                        <h3 
                            className="text-2xl font-bold xm:text-xl"
                        >
                            {product?.rating.count} reviews
                        </h3>
                    </div>

                </div>
            </div>
        </div>
    )
}