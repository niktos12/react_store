import { get } from "https";
import { Header } from "../components/Header";
import { IProduct } from "../models";
import {useParams} from "react-router-dom";
          

interface ProductProps{
    product: IProduct;
}
export function ProductInfo(props : any){
    const {id} = useParams();

    return(
        <div className="">
            <Header/>
            <h1>Product </h1>

        </div>
    )
}