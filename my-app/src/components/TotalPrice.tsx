import CartProduct from '../CartProduct'
import useCartStore from '../hooks/useStore'

const getTotal = (cartItem: CartProduct[]) => {
	let totalQuantity = 0
	let totalPrice = 0
	cartItem.forEach(item => {
		totalQuantity += item.quantity!
		totalPrice += item.price! * item.quantity!
	})
	return { totalPrice, totalQuantity }
}

const OrderValue = () => {
	const { cartItems } = useCartStore()

	const quantity = getTotal(cartItems).totalQuantity
	const price = getTotal(cartItems).totalPrice

	return (
		<div className="pt-5 pb-10 px-3 bg-yellow-500 rounded-3xl">
			<h2 className="font-bold text-center text-2xl mb-5">Order Value</h2>

			<h3 className="text-xl text-center ">
				Total Quantity: <span className="font-bold"> {quantity}</span>
			</h3>
			<h3 className="text-xl text-center mt-5  ">
				Total Price:{' '}
				<span className="font-bold">
					{' '}
					{new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD'
					}).format(price)}
				</span>
			</h3>

			<div className="flex justify-center mt-7">
				<button className="text-xl font-bold border-solid border-3 border-white text-white rounded-lg px-7 py-2">
					<h1 className="text-2xl font-bold border-2 border-white rounded-lg px-7 py-2 hover:bg-white hover:text-black duration-500">Checkout</h1>
				</button>
			</div>
		</div>
	)
}
export default OrderValue
