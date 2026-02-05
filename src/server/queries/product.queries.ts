import { unstable_cache } from 'next/cache'
import 'server-only'

import { db } from '@/lib/db'
import { product } from '@/lib/db/schema'
import { TProduct } from '@/shared/types'

interface IGetProduct {
	data: TProduct[]
	error: string | null
}

export const getProducts = unstable_cache(
	async (): Promise<IGetProduct> => {
		try {
			const res = await db.select().from(product)

			return { data: res || [], error: null }
		} catch (error) {
			console.log('Ошибка получения продуктов', error)
			return { data: [], error: 'Ошибка получения продуктов' }
		}
	},
	['all-products'],
	{ revalidate: 60, tags: ['product'] }
)
