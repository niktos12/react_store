import { Product } from "./Product"
import { useProducts } from "../hooks/products"
export function Promotions(){
    const {loading, error, products} = useProducts()
    return(
        <div 
            className="flex flex-col justify-center items-center"
        >
            <h1 
                className="text-4xl font-bold mt-4 mb-4"
            >
                Promotions
            </h1>
            <div 
                className="grid grid-cols-[repeat(3,350px)] gap-4 
                x:grid-cols-[repeat(2,350px)] sm:grid-cols-[repeat(2,250px)] 
                xm:grid-cols-[repeat(2,200px)] xs:grid-cols-[repeat(2,170px)]"
            >
                { products.map(product => <Product product={product} key={product.id}/>) }
            </div>
            
        </div>
    )
}