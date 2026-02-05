import Link from 'next/link'

import { HeaderMenuData } from './header-menu.data'

const HeaderMenu = () => {
	return (
		<ul className='flex gap-4'>
			{HeaderMenuData.map(item => (
				<li
					key={item.href}
					className='hover:text-accent flex cursor-pointer flex-col items-center transition-all duration-300'
				>
					<Link href={item.href} className='flex flex-col items-center'>
						<item.icon size={20} />
						{item.text}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default HeaderMenu
