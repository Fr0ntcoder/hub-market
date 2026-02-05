import { product } from '@/lib/db/schema'
import { InferSelectModel } from 'drizzle-orm'

export type TProduct = InferSelectModel<typeof product>
