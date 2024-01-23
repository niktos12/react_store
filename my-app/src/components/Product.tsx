import { useState , useEffect } from 'react'
import { IProduct } from '../models'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import useCartStore from '../hooks/useStore'
import { BsCartPlus } from "react-icons/bs";

export interface ProductProps {
	product: IProduct
}

export function Product({ product }: ProductProps) {
	const { addItemToCart } = useCartStore()
	const [width, setWidth] = useState(window.innerWidth)

	useEffect(()=> {
		const handleWindowResize = () => setWidth(window.innerWidth)
		window.addEventListener('resize', handleWindowResize)
		return () => window.removeEventListener('resize', handleWindowResize)
	}, [])

	let slicedTitle;
	const maxCharacters = width < 500 ? 20 : 38
	slicedTitle = product.title.slice(0, maxCharacters)
	
	const onAddToCart = () => {
		addItemToCart(product)
		toast.success('Added to cart', {})
	}

	return (
		<div
			className="bg-white rounded-3xl p-4 flex flex-col shadow-xl h-[360px] justify-between transition-all
            ease-in duration-150"
			
		>
			<img src={product.image} className="w-[180px] h-[180px] xm:w-[150px] xm:h-[150px]" />
			<p className="font-bold text-xl sm:text-lg">{slicedTitle + '...'}</p>
			<p className="font-bold text-lg sm:text-lg">{product.price}$</p>

			<div className="flex flex-row gap-4 items-center">
				<BsCartPlus
					onClick={onAddToCart}
					className="text-3xl cursor-pointer border-2 border-black rounded-3xl p-2 w-12 h-12 hover:bg-black hover:text-white duration-500 xm:w-10 xm:h-10 xm:p-1"
				>
					Add to cart
				</BsCartPlus>
				<Link to={`/product/${product.id}`}>
					<button className="bg-black text-white rounded-3xl px-4 py-2">
						Details
					</button>
				</Link>
			</div>
		</div>
	)
}
