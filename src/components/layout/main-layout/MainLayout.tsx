'use client'
import { PropsWithChildren } from 'react'

import { Footer } from '../footer'
import { Header } from '../header/Header'

export const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className='flex min-h-full flex-col'>
			<Header />
			<main className='flex-1'>{children}</main>
			<Footer />
		</div>
	)
}
