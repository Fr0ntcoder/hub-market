import clsx from 'clsx'
import type { Metadata } from 'next'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { Noto_Sans } from 'next/font/google'
import { notFound } from 'next/navigation'

import { MainLayout } from '@/components/layout/main-layout'

import { routing } from '@/i18n/routing'

import '../globals.css'

const inter = Noto_Sans({
	variable: '--font-noto-sans',
	subsets: ['latin', 'cyrillic']
})

export const metadata: Metadata = {
	title: 'Hub-market',
	description: ''
}
type Props = {
	children: React.ReactNode
	params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
	const { locale } = await params
	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}

	return (
		<html lang={locale}>
			<body className={clsx(inter.className, 'flex h-full flex-col')}>
				<NextIntlClientProvider>
					<MainLayout>{children}</MainLayout>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
