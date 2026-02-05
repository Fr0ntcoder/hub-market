import { InferSelectModel } from 'drizzle-orm'

import { review } from '@/lib/db/schema'

export type TReview = InferSelectModel<typeof review>
