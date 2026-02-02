import { Metadata } from 'next'

import { Home } from '@/components/screen/home'

export const metadata: Metadata = {
	title: 'Главная страница'
}

export default function HomePage() {
	return <Home />
}
