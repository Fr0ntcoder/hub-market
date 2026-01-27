import { User2 } from 'lucide-react'
import Link from 'next/link'

import {
	Button,
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from '@/components/ui'

import { PagesConfig } from '@/config'

export const User = () => {
	return (
		<Tooltip key='bottom'>
			<TooltipTrigger className='flex flex-col items-center'>
				<User2 size={25} />
				Войти
			</TooltipTrigger>
			<TooltipContent
				className='flex flex-col gap-3 bg-white pt-2 shadow'
				sideOffset={10}
			>
				<p className='text-sm'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
					architecto amet, beatae praesentium, laborum illum molestias cumque
					saepe quos, impedit aspernatur blanditiis quis enim excepturi optio
					vel? Delectus, temporibus consectetur.
				</p>
				<Link href={PagesConfig.LOGIN}>
					<Button className='w-full'>Войти или зарегистрироваться</Button>
				</Link>

				<Button>Личный кабинет</Button>
			</TooltipContent>
		</Tooltip>
	)
}
