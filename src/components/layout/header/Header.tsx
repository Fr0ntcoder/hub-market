import { Container } from '@/components/ui'

import { Logo } from '@/components/elements/logo'

import { CatalogMenu } from './catalog-menu'
import { HeaderMenu } from './header-menu'
import { Search } from './search'

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
			</Container>
		</header>
	)
}
