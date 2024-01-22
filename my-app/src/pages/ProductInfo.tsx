import { Header } from "../components/Header";
import { IProduct } from "../models";
import {useParams} from "react-router-dom";
import {useProducts} from "../hooks/products";
import { BsFillStarFill } from "react-icons/bs";
import { Loading } from "../components/Loading";
import  useCartStore  from "../hooks/useStore";
import { toast } from "react-hot-toast";


          

interface ProductProps{
    product: IProduct;
}
export function ProductInfo(props : any) {
    const {products} = useProducts();
    const {id} = useParams();
    const {addItemToCart} = useCartStore();
    
    // console.log(id)
    // console.log(typeof(id))

    const product = products.find((product) => product.id === Number(id));    

    const {loading, error} = useProducts();
    
    const onAddToCart = () => {
        addItemToCart(product as IProduct);
        toast.success("Added to cart", {});
      };

    return(
        
        <div className="">
            <Header/>
            <div 
                className="flex flex-row justify-center gap-20 items-start mt-20 bg-slate-200 shadow-lg p-20"
            >
                {loading && <Loading />}
                <div className="">
                    <img 
                        src={product?.image} 
                        alt="" 
                        className="w-[500px] rounded-3xl max-w-none x:w-[350px]"
                    />
                </div>
                <div className="bg-white p-4 rounded-3xl">
                    <h1 
                        className="text-3xl font-bold mb-4 text-center"
                    >
                        {product?.title}
                    </h1>
                    <p 
                        className="text-xl"
                    >
                        {product?.description}
                    </p>
                    <p 
                        className="text-2xl mt-4 font-bold"
                    >
                        Category: {product?.category}
                    </p>
                    <button
                        onClick={onAddToCart} 
                        className="bg-yellow-500 text-white rounded-2xl px-4 py-2 mt-4 hover:bg-yellow-600 duration-300 font-bold"
                    >
                        Buy for {product?.price}$
                    </button>
                    <div className="flex flex-col">
                        <h1 
                            className="font-bold text-3xl mt-4 text-center"
                        >
                            Rating:
                        </h1>
                        <div 
                            className="flex flex-row gap-2 items-center"
                        >
                            <BsFillStarFill 
                                className="text-yellow-500 text-3xl"
                            />
                            <h2 
                                className="text-3xl font-bold"
                            >
                                {product?.rating.rate}/5
                            </h2>
                        </div>
                        <h3 
                            className="text-2xl font-bold"
                        >
                            {product?.rating.count} reviews
                        </h3>
                    </div>

                </div>
            </div>
        </div>
    )
}