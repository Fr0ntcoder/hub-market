import { PropsWithChildren } from 'react'

export default async function LocaleLayout({ children }: PropsWithChildren) {
	return (
		<div className='flex h-full w-full items-center justify-center'>
			{children}
		</div>
	)
}
