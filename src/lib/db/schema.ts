import { sql } from 'drizzle-orm'
import { integer, real, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
	id: text('id').primaryKey(),
	email: text('email').notNull().unique(),
	password: text('password_hash').notNull(),
	name: text('name'),
	createdAt: text('createdAt')
		.notNull()
		.default(sql`(CURRENT_TIMESTAMP)`),
	updatedAt: text('updatedAt')
		.notNull()
		.default(sql`(CURRENT_TIMESTAMP)`)
		.$onUpdate(() => sql`(CURRENT_TIMESTAMP)`)
})

export const sessions = sqliteTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => users.id, { onDelete: 'cascade' }),
	expiresAt: text('expires_at').notNull()
})

export const products = sqliteTable('products', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	description: text('description'),
	price: integer('price').notNull(),
	discountPrice: integer('discount_price').notNull(),
	imageUrl: text('image_url').notNull(),
	createdAt: text('createdAt')
		.notNull()
		.default(sql`(CURRENT_TIMESTAMP)`)
})

export const reviews = sqliteTable('reviews', {
	id: text('id').primaryKey(),
	productId: text('product_id')
		.notNull()
		.references(() => products.id, { onDelete: 'cascade' }),
	userId: text('user_id')
		.notNull()
		.references(() => users.id, { onDelete: 'cascade' }),
	rating: real('rating').notNull(),
	comment: text('comment'),
	createdAt: text('createdAt')
		.notNull()
		.default(sql`(CURRENT_TIMESTAMP)`)
})

export const orders = sqliteTable('orders', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => users.id, { onDelete: 'cascade' }),
	total: integer('total').notNull(),
	status: text('status').notNull().default('pending'),
	createdAt: text('createdAt')
		.notNull()
		.default(sql`(CURRENT_TIMESTAMP)`)
})

export const orderItems = sqliteTable('order_items', {
	id: text('id').primaryKey(),
	orderId: text('order_id')
		.notNull()
		.references(() => orders.id, { onDelete: 'cascade' }),
	productId: text('product_id')
		.notNull()
		.references(() => products.id, { onDelete: 'cascade' }),
	quantity: integer('quantity').notNull(),
	price: integer('price').notNull()
})
