export const formatPrice = (price: number) => {
	if (!price) {
		return 0
	}

	return new Intl.NumberFormat('ru-Ru', {
		style: 'currency',
		currency: 'RUB',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	}).format(price)
}
