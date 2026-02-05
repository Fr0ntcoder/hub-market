'use client'

import { PropsWithChildren } from 'react'

import Footer from '../footer/Footer'
import Header from '../header/Header'

const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className='flex min-h-full flex-col'>
			<Header />
			<main className='flex-1'>{children}</main>
			<Footer />
		</div>
	)
}

export default MainLayout
