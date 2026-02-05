'use client'

import { SelectLanguage } from '@/shared/components/form/select-language'
import { Logo } from '@/shared/components/media/logo'
import { Container } from '@/shared/components/ui'

import { CatalogMenu } from './catalog-menu'
import { HeaderMenu } from './header-menu'
import { HeaderUser } from './header-user'
import { Search } from './search'

const Header = () => {
	return (
		<header>
			<Container className='flex items-center justify-between gap-5 p-5'>
				<div className='flex items-center gap-5'>
					<Logo />
					<CatalogMenu />
				</div>
				<Search />
				<HeaderUser />
				<HeaderMenu />
				<SelectLanguage />
			</Container>
		</header>
	)
}

export default Header
