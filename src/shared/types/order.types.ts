import { InferSelectModel } from 'drizzle-orm'

import { order, orderItem } from '@/lib/db/schema'

export type TOrder = InferSelectModel<typeof order>
export type TOrderItem = InferSelectModel<typeof orderItem>
