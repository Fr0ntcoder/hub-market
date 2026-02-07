import { unstable_cache } from 'next/cache'
import 'server-only'

import { db } from '@/lib/db'
import { TProductWithReviews } from '@/shared/types/product.types'

interface IGetProduct {
	data: TProductWithReviews[]
	error: string | null
}

export const getProducts = unstable_cache(
	async (): Promise<IGetProduct> => {
		try {
			const res = await db.query.product.findMany({
				with: {
					reviews: true
				}
			})
			console.log(res)
			return { data: res || [], error: null }
		} catch (error) {
			console.log('Ошибка получения продуктов', error)
			return { data: [], error: 'Ошибка получения продуктов' }
		}
	},
	['all-products'],
	{ revalidate: 60, tags: ['product'] }
)
