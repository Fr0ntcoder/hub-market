import { IFetcher } from '@/shared/types/other'
import { TProductWithReviews } from '@/shared/types/product.types'

import { EmptyBlock } from '../../empty-block'
import { ErrorBlock } from '../../error-block'
import { ProductCard } from '../product-card'

interface Props<T> {
	title?: string
	className?: string
	fetchData: IFetcher<T>
}

const ProductBlock = async <T extends TProductWithReviews>({
	title,
	fetchData
}: Props<T>) => {
	const { data, error } = await fetchData()

	if (error) {
		return <ErrorBlock text='Ошибка загрузки продуктов' />
	}

	if (data.length === 0) {
		return <EmptyBlock text='Продуктов нет' />
	}
	return (
		<>
			<h3 className='mb-4 text-2xl font-bold'>{title}</h3>
			<div className='grid w-full grid-cols-4 gap-5'>
				{data.map(product => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</>
	)
}

export default ProductBlock
