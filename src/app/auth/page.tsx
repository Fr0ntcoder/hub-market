import { Auth } from '@/components/screen/auth'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Страница авторизации'
}

export default function AuthPage() {
	return <Auth />
}
