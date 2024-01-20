import { useState } from 'react'
import { IProduct } from '../models'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import useCartStore from '../hooks/useStore'

export interface ProductProps {
	product: IProduct
}

export function Product({ product }: ProductProps) {
	const { addItemToCart } = useCartStore()
	const onAddToCart = () => {
		addItemToCart(product)
		toast.success('Added to cart', {})
	}

	return (
		<div
			className="bg-white rounded-3xl p-4 flex flex-col shadow-xl h-[360px] justify-between transition-all
            ease-in duration-150"
		>
			<img src={product.image} className="w-[180px] h-[180px]" />
			<p className="font-bold text-xl">{product.title}</p>
			<p className="font-bold text-lg">{product.price}$</p>

			<div className="flex flex-row gap-4">
				<button
					onClick={onAddToCart}
					className="bg-yellow-500 text-white rounded px-4 py-2"
				>
					Add to cart
				</button>
				<Link to={`/product/${product.id}`}>
					<button className="bg-black text-white rounded px-4 py-2">
						Details
					</button>
				</Link>
			</div>
		</div>
	)
}
