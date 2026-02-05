import { Metadata } from 'next'

import { Auth } from '@/features/auth'

export const metadata: Metadata = {
	title: 'Страница авторизации'
}

export default function AuthPage() {
	return <Auth />
}
