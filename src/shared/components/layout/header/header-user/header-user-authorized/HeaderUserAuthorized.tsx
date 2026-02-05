import { CircleUser, LogOut } from 'lucide-react'
import Link from 'next/link'

import { signOut } from '@/lib/db/auth-client'
import {
	Button,
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from '@/shared/components/ui'
import { PagesConfig } from '@/shared/config'
import type { IUser } from '@/shared/types'

interface Props {
	user: IUser
}
const HeaderUserAuthorized = ({ user }: Props) => {
	const handleLogout = () => {
		signOut()
	}
	return (
		<Tooltip key='bottom'>
			<TooltipTrigger className='flex flex-col items-center'>
				<CircleUser size={20} />
				{user.name}
			</TooltipTrigger>
			<TooltipContent
				className='z-20 flex flex-col gap-1 bg-white shadow'
				sideOffset={10}
			>
				<Button variant='ghost'>
					<Link href={PagesConfig.PROFILE}>Профиль</Link>
				</Button>
				<Button variant='ghost' onClick={handleLogout}>
					<LogOut />
					Выйти
				</Button>
			</TooltipContent>
		</Tooltip>
	)
}

export default HeaderUserAuthorized
