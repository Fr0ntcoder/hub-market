'use client'

import dynamic from 'next/dynamic'

import { Container } from '@/components/ui'

import { Logo } from '@/components/elements/logo'

import { CatalogMenu } from './catalog-menu'
import { HeaderMenu } from './header-menu'
import { Search } from './search'
import { useTranslations } from 'next-intl'

const DynamicSelectLanguage = dynamic(
	() =>
		import('../../elements/select-language/SelectLanguage').then(
			mod => mod.SelectLanguage
		),
	{
		ssr: false
	}
)
export const Header = () => {
	return (
		<header>
			<Container className='flex items-center justify-between gap-5 p-5'>
				<div className='flex items-center gap-5'>
					<Logo />
					<CatalogMenu />
				</div>
				<Search />
				<HeaderMenu />
				<DynamicSelectLanguage />
			</Container>
		</header>
	)
}
