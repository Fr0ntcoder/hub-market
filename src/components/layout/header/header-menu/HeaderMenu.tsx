import { User2 } from 'lucide-react'
import Link from 'next/link'

import {
	Button,
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from '@/components/ui'

import { PagesConfig } from '@/config'

import { HeaderMenuData } from './header-menu.data'

export const HeaderMenu = () => {
	return (
		<ul className='flex gap-4'>
			{HeaderMenuData.map(item => (
				<li
					key={item.href}
					className='hover:text-accent flex cursor-pointer flex-col items-center transition-all duration-300'
				>
					{item.href === PagesConfig.LOGIN ? (
						<Tooltip key='bottom'>
							<TooltipTrigger className='flex flex-col items-center'>
								<User2 size={20} />
								Войти
							</TooltipTrigger>
							<TooltipContent
								className='z-20 flex flex-col gap-3 bg-white pt-2 shadow'
								sideOffset={10}
							>
								<p className='text-sm'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Mollitia architecto amet, beatae praesentium, laborum illum
									molestias cumque saepe quos, impedit aspernatur blanditiis
									quis enim excepturi optio vel? Delectus, temporibus
									consectetur.
								</p>
								<Link href={PagesConfig.LOGIN}>
									<Button className='w-full'>
										Войти или зарегистрироваться
									</Button>
								</Link>

								<Button>Личный кабинет</Button>
							</TooltipContent>
						</Tooltip>
					) : (
						<Link href={item.href} className='flex flex-col items-center'>
							<item.icon size={20} />
							{item.text}
						</Link>
					)}
				</li>
			))}
		</ul>
	)
}
