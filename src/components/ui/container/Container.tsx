import { PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

interface Props {
	className?: string
}
export const Container = ({
	children,
	className
}: PropsWithChildren<Props>) => {
	return (
		<div className={cn('m-auto w-full max-w-7xl px-5', className)}>
			{children}
		</div>
	)
}
