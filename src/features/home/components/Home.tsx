
import { Suspense } from 'react'

import { getProducts } from '@/server/queries'
import { ProductBlock } from '@/shared/components/common/product/product-block'
import { ChooseCity } from '@/shared/components/form'
import { Container } from '@/shared/components/ui'

import { HomeSlider } from './home-slider'
import { Loader } from '@/shared/components/common/loader'

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
