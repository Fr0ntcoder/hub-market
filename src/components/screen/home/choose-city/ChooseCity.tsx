'use client'

import { useState } from 'react'

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui'

const ChooseCity = () => {
	const [city, setCity] = useState<string>('Москва')
	return (
		<Dialog>
			<DialogTrigger className='ml-auto'>
				{city} • <span className='text-primary font-medium'>Укажите адрес</span>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Выберите город</DialogTitle>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export default ChooseCity
