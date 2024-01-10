import { Header } from "../components/Header";
import { IProduct } from "../models";

interface ProductProps{
    product: IProduct;
}
export function ProductInfo({ product } : ProductProps){
    return(
        <div className="">
            <Header/>
            <h1>{product.title}</h1>
            <img src={product.image}></img>
        </div>
    )
}