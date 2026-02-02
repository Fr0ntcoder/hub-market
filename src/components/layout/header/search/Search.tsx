'use client'

import { useEffect, useRef, useState } from 'react'

import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList
} from '@/components/ui'

import { useDebounce } from '@/hooks'
import { cn } from '@/lib/utils'

const OPTIONS = ['Москва', 'Минск', 'Милан', 'Питер', 'Казань']
const cat = 'Москва'
interface Props {
	className?: string
}

const Search = ({ className }: Props) => {
	const [products, setProducts] = useState([])
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [query, setQuery] = useState<string>('')
	const debouncedQuery = useDebounce(query, 500)
	const commandRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {}, [debouncedQuery])

	return (
		<div
			className={cn(
				'flex min-h-10 flex-1 rounded-md border',
				isOpen && 'rounded-br-none rounded-bl-none',
				className
			)}
		>
			<Command className='relative' ref={commandRef}>
				<CommandInput
					value={query}
					onValueChange={setQuery}
					onFocus={() => setIsOpen(true)}
					onBlur={() => setIsOpen(false)}
				/>
				{isOpen && (
					<div className='animate-in slide-in-from-top-3 fade-in-2 absolute top-full -left-px z-20 w-[calc(100%+0.13rem)] border border-t-0 bg-white duration-200'>
						<CommandList>
							<CommandEmpty>Ничего не найдено</CommandEmpty>
							<CommandGroup>
								{OPTIONS.filter(opt =>
									opt.toLowerCase().includes(query.toLowerCase())
								).map(opt => (
									<CommandItem
										key={opt}
										value={opt}
										className='cursor-pointer'
										onSelect={currentValue => {
											setQuery(currentValue)
											setIsOpen(false)
										}}
									>
										{opt}
									</CommandItem>
								))}
							</CommandGroup>
						</CommandList>
					</div>
				)}
			</Command>
		</div>
	)
}

export default Search
