import { Metadata } from 'next'

import { Home } from '@/features/home/components'

export const metadata: Metadata = {
	title: 'Главная страница'
}

export default function HomePage() {
	return <Home />
}
