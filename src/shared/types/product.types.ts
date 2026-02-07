import { InferSelectModel } from 'drizzle-orm'

import { product } from '@/lib/db/schema'

import { TReview } from './review.types'

export type TProduct = InferSelectModel<typeof product>
export type TProductWithReviews = TProduct & {
	reviews: TReview[]
}
