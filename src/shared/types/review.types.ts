import { InferSelectModel } from 'drizzle-orm'

import { review } from '@/lib/db/schema'

import { TProduct } from './product.types'
import { IUser } from './user.types'

export type TReview = InferSelectModel<typeof review>
export type TFullReview = TReview & {
	product: TProduct
	user: IUser
}
