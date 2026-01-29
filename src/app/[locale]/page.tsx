import { use } from 'react'

import { Home } from '@/components/screen/home'

export default function IndexPage({ params }: PageProps<'/[locale]'>) {
	const { locale } = use(params)

	// Enable static rendering
	/* setRequestLocale(locale as Locale) */

	return <Home />
}
