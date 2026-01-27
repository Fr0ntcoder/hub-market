export class PagesConfig {
	static HOME = '/'
	static LOGIN = '/login'
	static ORDERS = '/orders'
	static FAVORITES = '/favorites'
	static CART = '/cart'
	static PRODUCT(slug: string) {
		return `/product/${slug}`
	}
}
