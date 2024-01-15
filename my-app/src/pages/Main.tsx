import { Header } from "../components/Header";
import { Presentation } from "../components/Presentation";
import { Promotions } from "../components/Promotions";
import { Loading } from "../components/Loading";
import {useProducts} from '../hooks/products'
import { AddedInCart } from "./AddedInCart";

export function MainPage(){
    const {loading, error, products} = useProducts()
    
    return(
        <div>
            {loading && <Loading/>}
            <Header/>
            <Presentation/>
            <Promotions/>
        </div>
    )
}