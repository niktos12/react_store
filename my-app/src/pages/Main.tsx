import { Header } from '../components/Header'
import { Presentation } from '../components/Presentation'
import { Promotions } from '../components/Promotions'
import { Loading } from '../components/Loading'
import { useProducts } from '../hooks/products'

export function MainPage() {
	const { loading } = useProducts()

	return (
		<div>
			{loading && <Loading />}
			<Header />
			<Presentation />
			<Promotions />
		</div>
	)
}
