'use client'

import Image from 'next/image'
import { useState } from 'react'
import cookie from 'js-cookie'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger
} from '@/components/ui'

import { selectLanguageData } from './select-language.data'

type TypeLanguage = 'ru' | 'en'

export const SelectLanguage = () => {
	const [language, setLanguage] = useState<TypeLanguage>('ru')
	const currentLanguage = selectLanguageData.find(
		item => item.code === language
	)
	const onHandleLanguage = (value: TypeLanguage) => {
		cookie
		setLanguage(value)
	}
	return (
		<Select value={language} onValueChange={onHandleLanguage}>
			<SelectTrigger className='flex w-full max-w-20 items-center'>
				<Image
					src={currentLanguage?.flag ?? ''}
					width={20}
					height={20}
					alt={currentLanguage?.code ?? 'flag'}
				/>
				<div className='w-3'>{currentLanguage?.codeText}</div>
			</SelectTrigger>
			<SelectContent position='popper'>
				<SelectGroup>
					{selectLanguageData.map(item => (
						<SelectItem value={item.code} key={item.code}>
							<Image src={item.flag} width={20} height={20} alt={item.code} />
							<span>{item.text}</span>
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}
