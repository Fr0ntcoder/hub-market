import { User2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

import {
	Button,
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from '@/shared/components/ui'
import { PagesConfig } from '@/shared/config'

const HeaderUserUnauthorized = () => {
	const t = useTranslations('header')
	return (
		<Tooltip key='bottom'>
			<TooltipTrigger className='flex flex-col items-center'>
				<User2 size={20} />
				{t('userTrigger')}
			</TooltipTrigger>
			<TooltipContent
				className='z-20 flex flex-col gap-3 bg-white pt-2 shadow'
				sideOffset={10}
			>
				<Link href={PagesConfig.LOGIN}>
					<Button className='w-full' size='sm'>
						Войти или зарегистрироваться
					</Button>
				</Link>

				<Button size='sm'>Личный кабинет</Button>
			</TooltipContent>
		</Tooltip>
	)
}

export default HeaderUserUnauthorized
