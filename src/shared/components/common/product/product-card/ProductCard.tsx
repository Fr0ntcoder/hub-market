import { MessageCircle, Star } from 'lucide-react'
import Image from 'next/image'
import { useMemo } from 'react'

import { TProductWithReviews } from '@/shared/types'
import {
	calcDiscountPrice,
	declensionComment,
	formatPrice
} from '@/shared/utils'

interface Props {
	product: TProductWithReviews
}
const ProductCard = ({ product }: Props) => {
	const isExistDiscountPrice = product.discountPrice ?? 0
	const reviewAverage = useMemo(() => {
		const reviews = product.reviews

		if (reviews.length === 0) return 0

		const total = reviews.reduce((acc, item) => acc + item.rating, 0)

		return (total / reviews.length).toFixed(0)
	}, [product.reviews])

	return (
		<div className='cursor-pointer rounded p-5 shadow transition-transform duration-300 hover:scale-105'>
			<div className='relative mb-3 h-44 w-full bg-cover'>
				<Image
					src={product.imageUrl}
					fill
					priority
					alt={product.name}
					className='pointer-events-none bg-top-left object-contain'
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				/>
			</div>
			<div className='flex items-end gap-1 pb-3 font-bold'>
				<span className='text-xl text-red-500'>
					{formatPrice(isExistDiscountPrice)}
				</span>
				<span className='text-gray-400 line-through'>
					{formatPrice(product.price)}
				</span>
				<span className='rounded bg-red-500 px-1.5 py-0.5 text-sm text-white'>
					- {calcDiscountPrice(product.price, isExistDiscountPrice)}%
				</span>
			</div>
			<h4 className='mb-3'>{product.name}</h4>
			<div className='flex items-center text-sm'>
				<div className='mr-2 flex gap-1'>
					<Star size={20} className='text-orange-400' />
					{reviewAverage}
				</div>
				<div className='flex gap-1'>
					<MessageCircle size={20} />
					{declensionComment(product.reviews.length)}
				</div>
			</div>
		</div>
	)
}

export default ProductCard
