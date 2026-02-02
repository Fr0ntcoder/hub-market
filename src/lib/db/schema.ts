import { int, real, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const user = sqliteTable('users', {
	id: text('id').primaryKey(),
	email: text('email').notNull().unique(),
	name: text('name'),
	emailVerified: int('emailVerified', { mode: 'boolean' })
		.notNull()
		.default(false),
	image: text('image'),
	createdAt: int('created_at')
		.notNull()
		.$defaultFn(() => Date.now()),
	updatedAt: int('updated_at')
		.notNull()
		.$defaultFn(() => Date.now())
})

export const account = sqliteTable('accounts', {
	id: text('id').primaryKey(),
	userId: text('userId')
		.notNull()
		.references(() => user.id, { onDelete: 'cascade' }),
	providerId: text('providerId').notNull(),
	accountId: text('accountId').notNull(),
	accessToken: text('accessToken'),
	refreshToken: text('refreshToken'),
	idToken: text('idToken'),
	accessTokenExpiresAt: int('accessTokenExpiresAt'),
	refreshTokenExpiresAt: int('refreshTokenExpiresAt'),
	scope: text('scope'),
	password: text('password'),
	createdAt: int('createdAt')
		.notNull()
		.$defaultFn(() => Date.now()),
	updatedAt: int('updatedAt')
		.notNull()
		.$defaultFn(() => Date.now())
})

export const session = sqliteTable('sessions', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id, { onDelete: 'cascade' }),
	expiresAt: text('expires_at').notNull(),
	token: text('token').notNull().unique(),
	ipAddress: text('ipAddress'),
	userAgent: text('userAgent'),
	createdAt: int('created_at')
		.notNull()
		.$defaultFn(() => Date.now()),
	updatedAt: int('updated_at')
		.notNull()
		.$defaultFn(() => Date.now())
})

/* export const verification = sqliteTable('verification', {
	id: text('id').primaryKey(),
	identifier: text('identifier').notNull(),
	value: text('value').notNull(),
	expiresAt: integer('expiresAt').notNull(), // milliseconds
	createdAt: integer('createdAt').notNull().default(0), // milliseconds
	updatedAt: integer('updatedAt').notNull().default(0) // milliseconds
}) */
export const review = sqliteTable('reviews', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id, { onDelete: 'cascade' }),
	productId: text('product_id')
		.notNull()
		.references(() => product.id, { onDelete: 'cascade' }),
	rating: real('rating').notNull(),
	comment: text('comment'),
	createdAt: int('created_at')
		.notNull()
		.$defaultFn(() => Date.now()),
	updatedAt: int('updated_at')
		.notNull()
		.$defaultFn(() => Date.now())
})

export const product = sqliteTable('products', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	description: text('description'),
	price: int('price').notNull(),
	discountPrice: int('discount_price'),
	imageUrl: text('image_url').notNull(),
	createdAt: int('created_at')
		.notNull()
		.$defaultFn(() => Date.now()),
	updatedAt: int('updated_at')
		.notNull()
		.$defaultFn(() => Date.now())
})

export const order = sqliteTable('orders', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id, { onDelete: 'cascade' }),
	total: int('total').notNull(),
	status: text('status').notNull().default('pending'),
	createdAt: int('created_at')
		.notNull()
		.$defaultFn(() => Date.now()),
	updatedAt: int('updated_at')
		.notNull()
		.$defaultFn(() => Date.now())
})

export const orderItem = sqliteTable('order_items', {
	id: text('id').primaryKey(),
	orderId: text('order_id')
		.notNull()
		.references(() => order.id, { onDelete: 'cascade' }),
	productId: text('product_id')
		.notNull()
		.references(() => product.id, { onDelete: 'cascade' }),
	quantity: int('quantity').notNull().default(1),
	price: int('price').notNull()
})
