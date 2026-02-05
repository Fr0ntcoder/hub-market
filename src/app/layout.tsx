import clsx from 'clsx'
import { Noto_Sans } from 'next/font/google'
import { PropsWithChildren } from 'react'

import { Toaster } from '@/shared/components/ui'

import './globals.css'

const inter = Noto_Sans({
	variable: '--font-noto-sans',
	subsets: ['latin', 'cyrillic']
})

export default async function LocaleLayout({ children }: PropsWithChildren) {
	return (
		<html lang='ru'>
			<body className={clsx(inter.className, 'flex h-full flex-col')}>
				<Toaster position='top-center' />
				{children}
			</body>
		</html>
	)
}
