export class PagesConfig {
	static HOME = '/'
	static LOGIN = '/auth'
	static ORDERS = '/orders'
	static FAVORITES = '/favorites'
	static CART = '/cart'
	static PRODUCT(slug: string) {
		return `/product/${slug}`
	}
}
