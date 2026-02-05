import { TProduct } from '@/shared/types'
import { IFetcher } from '@/shared/types/other'

import { EmptyBlock } from '../../empty-block'
import { ErrorBlock } from '../../error-block'

interface Props<T> {
	title?: string
	className?: string
	fetchData: IFetcher<T>
}

const ProductBlock = async <T extends TProduct>({
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
			<div className='grid grid-cols-4 gap-5'>
				{data.map(item => (
					<div key={item.id}>{item.name}</div>
				))}
			</div>
		</>
	)
}

export default ProductBlock
