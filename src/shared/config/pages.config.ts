export class PagesConfig {
	static HOME = '/'
	static PROFILE = '/profile'
	static LOGIN = '/auth'
	static ORDERS = '/orders'
	static FAVORITES = '/favorites'
	static CART = '/cart'
	static PRODUCT(slug: string) {
		return `/product/${slug}`
	}
}


export class ApiConfig {
	static API = '/api'
	static PRODUCTS = `${this.API}/products`

}