import { Header } from '../components/Header'
import useCartStore from '../hooks/useStore'
import CartItemCard from '../components/CartItemCard'
import { Loading } from '../components/Loading'
import { useProducts } from '../hooks/products'
import OrderValue from '../components/TotalPrice'

export function AddedInCart() {
	const { cartItems } = useCartStore()
	const { loading } = useProducts()

	if (cartItems && cartItems.length < 1) {
		return (
			<div>
				{loading && <Loading />}
				<Header />
				<h1 className="text-center text-4xl font-bold mt-20">Cart is empty</h1>
			</div>
		)
	}
	return (
		<div>
			<Header />
			<h1 className="text-center text-4xl font-bold mt-20 mb-10">Cart</h1>
			<OrderValue />
			<div className="grid grid-cols-[repeat(2,450px)] gap-4 justify-center lg:grid-cols-[repeat(2,350px)] sm:grid-cols-[repeat(1,450px)] xm:grid-cols-[repeat(1,350px)]">
				{cartItems?.map(item => (
					<CartItemCard product={item} key={item.id} />
				))}
			</div>
		</div>
	)
}
