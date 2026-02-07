import { Suspense } from 'react'

import { getProducts } from '@/server/queries'
import { Loader } from '@/shared/components/common/loader'
import { ProductBlock } from '@/shared/components/common/product/product-block'
import { ChooseCity } from '@/shared/components/form'
import { Container } from '@/shared/components/ui'

import { HomeSlider } from './home-slider'

const Home = () => {
	return (
		<Container className='flex flex-col items-start gap-5'>
			<ChooseCity />
			<HomeSlider />
			<Suspense fallback={<Loader />}>
				<ProductBlock fetchData={getProducts} title='Продукты' />
			</Suspense>
		</Container>
	)
}

export default Home
