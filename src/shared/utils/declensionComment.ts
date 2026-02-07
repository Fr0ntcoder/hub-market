export const declensionComment = (n: number) => {
	const value = Math.abs(n) % 100
	const num = value % 10

	if (value > 10 && value < 20) {
		return `${n} отзывов`
	}
	if (value > 1 && num < 5) {
		return `${n} отзыва`
	}

	if (num === 1) {
		return `${n} отзыв`
	}

	return `${n} отзывов`
}
