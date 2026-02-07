export const calcDiscountPrice = (price: number, discountPrice: number) => {
	if (!price) {
		return null
	}

	return Math.ceil(((price - discountPrice) / price) * 100)
}
