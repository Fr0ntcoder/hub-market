import { Loader2 } from 'lucide-react'

import { useSession } from '@/lib/db/auth-client'

import { HeaderUserAuthorized } from './header-user-authorized'
import { HeaderUserUnauthorized } from './header-user-unauthorized'

const HeaderUser = () => {
	const { data, isPending } = useSession()

	if (isPending) {
		return <Loader2 className='h-6 w-6 animate-spin' />
	}
	return (
		<>
			{data?.user ? (
				<HeaderUserAuthorized user={data?.user} />
			) : (
				<HeaderUserUnauthorized />
			)}
		</>
	)
}

export default HeaderUser
